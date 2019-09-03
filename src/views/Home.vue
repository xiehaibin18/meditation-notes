<template>
  <div id="home">
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
  <label for="name" v-show="isShowSub">
    输入您的名字：<input type="text" id="name">
    <button @click="btnsubmit">提交</button>
  </label>
  <h2 v-show="!isShowSub">{{ $store.state.name }}欢迎您<button @click="changebtn">修改</button></h2>
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
      },
      isShowSub: true
    }
  },
  methods: {
    getHomeAds() {//注册网络请求方法
      getHomeAds().then(res => {
        this.banners = res.data.data.banner.list;
        // console.log(res.data.data.banner.list)
      })
    },
    btnsubmit() {
      const value = document.getElementById('name').value
      if(localStorage.getItem('name') == null && value != ''){
        localStorage.setItem('name', value)
        this.$store.commit('setname', value)
        this.isShowSub = false
      }
    },
    changebtn() {
      document.getElementById('name').value = localStorage.getItem('name')
      localStorage.removeItem('name')
      this.isShowSub = true
    }
  },
  created() {
    this.getHomeAds()
    if(localStorage.getItem('name') != null){
      this.$store.commit('setname', localStorage.getItem('name'))
      this.isShowSub = false
    }
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