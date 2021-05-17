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
      url: 'https://api.mocksys.com/api/v1/mock/20042/get/past',
      table_row: [
        {prop:'number',label:'序号'},
        {prop:'bookName',label:'书名'},
        {prop:'author',label:'作者'},
        {prop:'ISB',label:'ISBN'},
        {prop:'bookPage',label:'页数'},
        {prop:'price',label:'定价'},
        {prop:'publishDate',label:'出版时间'},
        {prop:'inventor',label:'库存数量'},
        {prop:'transla',label:'翻译'},
        {prop:'classify',label:'分类'}
      ],
      lineData: [],
      currentPage:1,
      totalCount:10,
      PageSize:10,
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
