<template>

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
        <el-form-item label="证书编号">
          <el-input v-model="form.certificateNumber"></el-input>
        </el-form-item>
        <el-form-item label="工程名称">
          <el-input v-model="form.projectName"></el-input>
        </el-form-item>
        <el-form-item label="minPageSize">
          <el-input v-model="form.minPageSize"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="证照唯一码">
          <el-input v-model="form.license"></el-input>
        </el-form-item>
        <el-form-item label="施工单位">
          <el-input v-model="form.unit"></el-input>
        </el-form-item>
        <el-form-item label="richBookMark">
          <el-input v-model="form.richBookMark"></el-input>
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
</template>

<script>
export default {
  data() {
    return {
      form: {
        certificateNumber: '',
        projectName:'',
        minPageSize:'',
        license:'',
        unit:'',
        richBookMark:''
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
</style>
