<template>
  <div id="app">
    <too-bar></too-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import TooBar from './components/ToolBar.vue';

export default {
  components: {
    TooBar,
  },
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
