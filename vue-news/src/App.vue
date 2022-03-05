<template>
  <div id="app">
    <too-bar></too-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import TooBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    TooBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true
    },
    endSpinner() {
      this.loadingStatus = false
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    console.log(1);
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #33495E;
  text-decoration: none;
}
a:hover {
  color: #42b88e;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
