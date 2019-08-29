<template>
    <tab-bar>
      <tab-bar-item path='/home' activeColor='#ee8033'>
          <template v-slot:item-icon>
            <img src="~assets/img/tabbar/home_deactive.svg" alt />
          </template>
          <template v-slot:item-icon-active>
            <img src="~assets/img/tabbar/home_active.svg" alt />
          </template>
          <template v-slot:item-text>
            <div>Home</div>
          </template>
      </tab-bar-item>
      <tab-bar-item path='/about' activeColor='#ee8033'>
          <template v-slot:item-icon>
            <img src="~assets/img/tabbar/about_deactive.svg" alt />
          </template>
          <template v-slot:item-icon-active>
            <img src="~assets/img/tabbar/about_active.svg" alt />
          </template>
          <template v-slot:item-text>
            <div>About</div>
          </template>
      </tab-bar-item>
      <tab-bar-item path='/clock' activeColor='#ee8033'>
          <template v-slot:item-icon>
            <img src="~assets/img/tabbar/clock_deactive.svg" alt />
          </template>
          <template v-slot:item-icon-active>
            <img src="~assets/img/tabbar/clock_active.svg" alt />
          </template>
          <template v-slot:item-text>
            <div>Clock</div>
          </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>