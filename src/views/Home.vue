<template>
  <div id="home">
    <swiper>
    <swiper-item v-for="item in banners" :key="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
  </div>
</template>

<script>
import { getHomeAds } from "network/home"
import {Swiper, SwiperItem} from 'components/swiper'

export default {
  name: 'home',
  data() {
    return {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
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
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>
#notes {
  height: 500px;
}
</style>