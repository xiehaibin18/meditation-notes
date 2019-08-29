<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  #tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FBF9FA;
    box-shadow: 0 -2px 6px rgba(105, 105, 105, 0.1);
    color: #545662;
  }
</style>
