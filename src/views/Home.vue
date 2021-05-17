<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <Aside/>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script>
import Aside from '@/components/Home/Aside.vue'
export default {
  components:{
    Aside,
  }
}
</script>

<style leng="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
