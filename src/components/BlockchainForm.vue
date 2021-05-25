<template>
  <div class="form-main">
    <el-row>
      <el-form ref="form" :model="form" label-width="100px">
        <el-col :span="10">
          <el-form-item label="按编号查询">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button>查询并上链</el-button>
          </el-form-item>
        </el-col>
      </el-form>
      <el-form ref="form" :model="form" label-width="110px">
        <el-col :span="6" :offset="2">
          <el-form-item label="证照唯一码">
            <el-input v-model="form.license"></el-input>
          </el-form-item>
          <el-form-item label="施工单位">
            <el-input v-model="form.unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="工程名称">
            <el-input v-model="form.projectName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="12" :span="12">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button>查询并上链</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <el-row :gutter="20">
      <el-form class="riqi" ref="form" :model="form" label-width="100px">
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

          <el-button type="primary" @click="onSubmit">
            <i class="el-icon-search"></i>
            搜索
          </el-button>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        certificateNumber: '',
        projectName: '',
        minPageSize: '',
        license: '',
        unit: '',
        richBookMark: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
.form-main {
  margin-bottom: 20px;

}
.demonstration {
  margin: 0 10px;
 }
</style>
