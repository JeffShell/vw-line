<template>
  <div>
    <el-container>
      <Aside/>
      <el-container>
        <el-header>标题</el-header>
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
.el-header {
  border: 1px solid red;
}

.el-aside {
  /*border: 1px solid red;*/
}

.el-main {
  border: 1px solid skyblue;
}
</style>
