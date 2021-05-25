<template>
  <el-row :gutter="10">
    <el-form ref="form" :model="form" label-width="100px">
      <el-col :span="4">
        <el-input placeholder="工程名单" v-model="form.projectName"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="施工单位" v-model="form.unit"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="发证机关" v-model="form.department"></el-input>
      </el-col>
      <el-col :span="6">
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
              v-model="form.value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="2">

        <el-button type="primary" @click="onSubmit">
          <i class="el-icon-search"></i>
          搜索
        </el-button>
      </el-col>
    </el-form>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        projectName: '',
        unit: '',
        department: '',
        value1: ''
      }
    }
  },
  methods:{
    onSubmit(){
      console.log(this.form)
    }
  }
}
</script>

<style scoped lang="scss">

.demonstration {
  margin: 0 10px;
}
</style>
