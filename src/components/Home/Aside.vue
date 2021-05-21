<template>
  <el-menu default-active="1-4-1"
           text-color="#fff"
           background-color="#545c64"
           active-text-color="#5486ca"
           router
           class="el-menu-vertical-demo"
           :collapse="msg">
    <el-menu-item index="/interblockchainshow">
      <i class="el-icon-s-grid"></i>
      <span slot="title">跨链</span>
    </el-menu-item>
    <el-menu-item index="/nothing">
      <i class="el-icon-data-line"></i></i>
      <span slot="title">什么都没</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  props:['msg'],
  data() {
    return {
    };
  },
  watch: {
    msg:{
      handler(){
        console.log(this.msg)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu {
  height: 100vh;
  border: 0;
    > .el-menu-item {
      font-size: 18px;
    }
}
</style>
