<template>
  <el-row :gutter="10">
    <el-form ref="form" :model="form" label-width="100px">
      <el-col :span="4">
        <el-input placeholder="工程名单" v-model="form.licence"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="施工单位" v-model="form.buildUnit"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="发证机关" v-model="form.department"></el-input>
      </el-col>
      <el-col :span="12">
        <div class="block">
          <span>查询日期</span>
          <el-date-picker
              class="demonstration"
              v-model="form.dateValue"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
          </el-date-picker>
          <el-button type="primary" size="medium"
                     @click="onSubmit">
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
  props: ['backgroundData'],
  data() {
    return {
      form: {
        licence: '',
        buildUnit: '',
        department: '',
        dateValue: ''
      }
    }
  },
  methods: {
    searchKeyValue(value) {
      let inquireData = this.backgroundData.filter(item => {
        return Object.keys(value).reduce((flag, i) => {
          if (!flag) return false
          return value[i].trim() ? String(item[i]).indexOf(value[i]) !== -1 : true
        }, true)
      })
      if(inquireData.length === 0){
        this.$message({
          message: '没有数据'
        });
        return false
      }
      this.$message({
        message: '查询成功',
        type: 'success'
      });
      this.$emit('childByValue', inquireData)
    },
    onSubmit() {
      let itemKey = Object.keys(this.form)
      let arr = itemKey.filter(item => {
        return this.form[item]
      })
      if (arr.length !== 0) {
        this.searchKeyValue(this.form)
      } else {
        this.$message({
          message: '请输入关键字查询好吗',
        });
      }
    },
  }
  ,
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
