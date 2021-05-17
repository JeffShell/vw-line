<template>
  <div>
    <el-table :data="displayData" stripe=true>
      <el-table-column
          v-for="(item, index) in table_row" :key="index"
          :prop="item.prop" :label="item.label"
      >
      </el-table-column>
    </el-table>
    <el-pagination
        class="pag"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="totalCount"
        background>
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BookList",
  data() {
    return {
      url: 'https://api.mocksys.com/api/v1/mock/20043/get/kxlm',
      table_row: [
        {prop:'licence',label:'名称'},
        {prop:'number',label:'编号'},
        {prop:'unit',label:'建设单位'},
        {prop:'department',label:'发证机关'},
        {prop:'date',label:'发证日期'},
        {prop:'unitName',label:'工程名称'},
        {prop:'address',label:'建设地址'},
        {prop:'price',label:'合同价格'},
        {prop:'buildUnit',label:'建设单位'},
        {prop:'hash',label:'广州局交易哈希'},
        {prop:'status',label:'状态'}
      ],
      lineData: [],
      currentPage:1,
      totalCount:10,
      PageSize:7,
    }
  },
  computed:{
    displayData(){
      return this.lineData.slice(
          (this.currentPage-1)*this.PageSize, this.currentPage*this.PageSize
      )
    }
  },
  methods: {
    getData(){
      axios.get(this.url)
          .then((response) =>{
            this.lineData = response.data.data
            this.totalCount = response.data.data.length
          }).catch(function (error) {
        console.log(error);
      })
    },
    handleCurrentChange(val) {
      this.currentPage=val
    },
  },
  created:function(){
    this.getData()
  }
}
</script>

<style scoped>
.pag {
  margin: 20px;
  text-align: center;
}

</style>
