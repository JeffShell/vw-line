<template>
  <div>
    <el-container>
      <div class="c">
        <Aside :msg="msg"/>
      </div>
      <el-container>
        <el-header>
          <Breadcrumb @icon_break="icon_break"/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import Aside from '@/components/Home/Aside.vue'
import Breadcrumb from '@/components/Home/Breadcrumb.vue'

export default {
  components: {
    Aside,
    Breadcrumb
  },
  data() {
    return {
      msg: false
    }
  },
  methods: {
    icon_break() {
      this.msg = !this.msg
    }
  },
}
</script>

<style leng="scss">
.el-header {
  border-bottom: 1px solid #eee;
}
.c {

  background-color: #545c64;
}

</style>
