<template>
  <div>
    <el-container>
      <el-aside style="width: 200px">
      <Aside/>
      </el-aside>
      <el-container>
        <el-header>
          <Breadcrumb/>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script>
import Aside from '@/components/Home/Aside.vue'
import Breadcrumb from '@/components/Home/Breadcrumb.vue'
export default {
  components:{
    Aside,
    Breadcrumb
  }
}
</script>

<style leng="scss">
.el-header {
  border-bottom: 1px solid #eee;
}
.el-aside {
  height: 100vh;
  border: 0;
  background-color: #545c64;
}
</style>
