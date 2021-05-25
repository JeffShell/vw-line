<template>
  <el-row :gutter="20">
    <el-form ref="form" :model="form" label-width="100px">
      <el-col :span="4">
        <el-input placeholder="工程名单"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="施工单位"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="发证机关"></el-input>
      </el-col>
      <el-col :span="8">
        <div class="block">
          <span class="demonstration">查询</span>
          <el-date-picker
              type="date"
              placeholder="选择日期">
          </el-date-picker>
          <span class="demonstration">至</span>
          <el-date-picker
              type="date"
              placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="2">

        <el-button type="primary">
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
        department: ''
      }
    }
  },
}
</script>

<style scoped>

</style>
