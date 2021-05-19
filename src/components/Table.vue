<template>
  <div>
    <el-table :data="displayData" stripe>
        <el-table-column
            v-for="(item, index) in table_row" :key="index"
            :prop="item.prop" :label="item.label"
        >
          <template v-if="item.prop === 'status'">
            <el-tag :type="lineData[index].status? 'success' : 'info'">缓存成功</el-tag>
          </template>
          <div class="cc" v-else-if="item.prop === 'cc'">
            <el-button size="mini" type="success">上链</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </div>
        </el-table-column>
    </el-table>
    <div class="tabListPage">
      <el-pagination
          background
          class="pag"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
      </el-pagination>
    </div>
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
        {prop: 'licence', label: '名称'},
        {prop: 'number', label: '编号'},
        {prop: 'unit', label: '建设单位'},
        {prop: 'department', label: '发证机关'},
        {prop: 'date', label: '发证日期'},
        {prop: 'unitName', label: '工程名称'},
        {prop: 'address', label: '建设地址'},
        {prop: 'price', label: '合同价格'},
        {prop: 'buildUnit', label: '建设单位'},
        {prop: 'hash', label: '广州局交易哈希'},
        {prop: 'status', label: '状态'},
        {prop: 'cc', label: '操作'}
      ],
      lineData: [],
      currentPage: 1,
      totalCount: 10,
      pageSizes:[1,2,3,4,5],
      PageSize: 5,
    }
  },
  computed: {
    displayData() {
      return this.lineData.slice(
          (this.currentPage - 1) * this.PageSize, this.currentPage * this.PageSize
      )
    },
  },
  methods: {
    getData() {
      axios.get(this.url)
        .then((response) => {
          this.lineData = response.data.data
          this.totalCount = response.data.data.length
          console.log(this.lineData[0].status)
        }).catch(function (error) {
          console.log(error);
        })
    },
    handleSizeChange(val) {
      this.PageSize=val
      this.currentPage=1
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
  },
  created() {
    this.getData()
  }
}
</script>

<style scoped>
.pag {
  margin: 20px;
  text-align: center;
}
.cc {
  display: flex;
}
</style>
