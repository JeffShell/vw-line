<template>
  <div class="bread">
    <i class="el-icon-s-fold"></i>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
          v-for="(item,index) in breadList"
          :key="index"
      >
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadList: [],
      isCollapse: true
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    isHome(route) {
      return route.name === "home";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      if (!this.isHome(matched[0])) {
        console.log(matched);
        matched = [{path: "/home", meta: {title: "首页"}}].concat(matched);
      }
      this.breadList = matched;
    }
  },
  created() {
    this.getBreadcrumb();
  }
};
</script>
<style lang="scss">
.bread {
  font-size: 25px;
  display: flex;
  height: 60px;
  line-height: 60px;
  align-items: center;
  > i {
    margin-right: 10px;
  }
}
</style>
