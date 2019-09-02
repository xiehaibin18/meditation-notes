<template>
  <div id="home">
    
  </div>
</template>

<script>
import { getHomeAds } from "network/home"

export default {
  name: 'home',
  data() {
    return {
      banners: []
    }
  },
  methods: {
    getHomeAds() {//注册网络请求方法
      getHomeAds().then(res => {
        this.banners = res.data.data.banner.list;
        // console.log(res.data.data.banner.list)
      })
    }
  },
  created() {
    this.getHomeAds()
  }
}
</script>

<style>
#notes {
  height: 500px;
}
</style>