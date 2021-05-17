<template>
  <el-aside style="width: 200px">
    <el-menu
        default-active="1"
        unique-opened
        router
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#5486ca">
      <el-menu-item index="/interblockchainshow">
        <i class="el-icon-s-grid"></i>
        跨链
      </el-menu-item>
      <el-menu-item index="/nothing">
        <i class="el-icon-data-line"></i>
        什么都没
      </el-menu-item>
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
  height: 100vh;
  border: 0;
  background-color:#545c64;
  > .el-menu {
    border: 0;
    > .el-menu-item {
      font-size: 18px;
    }
  }
}
</style>
