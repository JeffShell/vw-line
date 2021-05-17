<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu
        default-active="1"
        unique-opened
        router>
      <el-menu-item index="/interblockchainshow">跨链</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style lang="scss" scoped>
.el-aside {
  color: #333;
  border-right: 1px solid #d3dce6;
  line-height: 200px;
  height: 100vh;
  > span {
    margin-right: auto;
  }
}
</style>
