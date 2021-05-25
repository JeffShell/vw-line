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
      <el-col :span="12">
        <div class="block">
          <span >查询日期</span>
          <el-date-picker
              class="demonstration"
              v-model="form.value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
          </el-date-picker>
          <el-button type="primary" size="medium" @click="onSubmit">
            <i class="el-icon-search"></i>
            搜索
          </el-button>
        </div>
      </el-col>

    </el-form>
  </el-row>
</template>

<script>
export default {
  props:['backgroundData'],
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
      console.log(this.backgroundData)
    }
  }
}
</script>

<style scoped lang="scss">
.block {
  width: 100%;
}
.demonstration {
  margin: 0 10px;
}
</style>
