<template>
  <div>
    <el-container>
      <Aside/>
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
</style>
