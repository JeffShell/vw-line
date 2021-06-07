<template>
  <main>
    <el-row class="main" type="flex" justify="center" align="middle">
      <el-col :span="8" :md="7">
        <el-card>
          <el-form ref="formdata" :model="formdata" label-width="80px" :rules="rules">
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="formdata.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="formdata.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit()">
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </main>

</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      aa: "user",
      formdata: {
        userName: '',
        password: '',
      },
      rules: {
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.formdata.validate((valid) => {
        axios({
          url: 'http://g.cn',
          method: 'post',
          data: {
            formdata: this.formdata
          }
        }).then((res) => {
          if (res.status == 200) {
            if (valid) {
              if (res) {
                this.$store.dispatch('login', this.formdata).then(() => {
                  this.$notify({
                    type: 'success',
                    message: '欢迎你,' + this.formdata.userName + '!',
                    duration: 3000
                  })
                  this.$router.replace('/home')
                })
              } else {
                this.$message({
                  type: 'error',
                  message: '用户名或密码错误',
                  showClose: true
                })
              }
            } else {
              return false
            }
          } else {
            console.log(res.mockData)
          }
        })
      })
    }
  }

}
</script>
<style lang="scss" scoped>
main {
  background: #44a08d;
  background: -webkit-linear-gradient(to top, #44a08d, #093637);
  background: linear-gradient(to top, #44a08d, #093637);
}
.main {
  height: 100vh;
  margin-top: 0px;
}
</style>