<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar";

export default {
  name: "App",
  data () {
    return {}
  },
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
