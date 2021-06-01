<template>
<el-row class="main" type="flex" justify="center" align="middle">
  <el-col :span="8" :md="7">
    <el-card>  
      <el-form 
        ref="formdata"
        :model="formdata" 
        label-width="80px" 
        :rules="rules">
        <el-form-item label="用户名" prop="user">
          <el-input v-model="formdata.user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passwd">
          <el-input v-model="formdata.passwd" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="validate('formdata')">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-col>
</el-row>

</template>
<script>
export default {
  data(){
    return {
      formdata: {
        user: '',
        passwd: '',
      },
      rules: {
        passwd: [
          { required: true, message: '请输入', trigger: 'blur' },
          { max: 5, message: "请输入至少5个数字" }
        ]
      }
    }
  },
  methods:{
    validate(value){
      this.$refs[value].validate((valid) => {
        if (valid) {
          console.log(valid);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }

}
</script>
<style lang="scss">
body {
  background: #44a08d;
  background: -webkit-linear-gradient(to top, #44a08d, #093637); 
  background: linear-gradient(to top, #44a08d, #093637);
}
.main {
  height: 100vh;
  margin-top: 0px;
}
</style>