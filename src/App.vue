<template>
  <div id="app">
    <too-bar></too-bar>
    <router-view></router-view>
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
</style>
