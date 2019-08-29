<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="isActive"><slot name="item-icon-active"></slot></div>
      <div v-else><slot name="item-icon"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
      // isActive: false
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#ee8033'
    }
  },
  computed: {
    isActive() {//获取当前活跃的路由的地址，并且与复用的组件传进来的path值比较，相等说明活跃
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {//获取isActive()的返回值，得出活跃状态对的组件，如果活跃则为该组件绑定相应的color样式
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      if(this.$route.path !== this.path){//当前路由地址和点击前往的路由地址相同时不执行跳转避免报错
        this.$router.replace(this.path)
      }else{
        return;
      }
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  /* color: #ee8033; */
}
</style>
