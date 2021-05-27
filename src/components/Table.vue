<template>
  <div>
    <el-table
        style="width:1700px"
        :data="displayData"
        stripe
        fit
        border>
      <el-table-column prop="licence" label="名称" fixed></el-table-column>
      <el-table-column prop="number" label="编号"></el-table-column>
      <el-table-column prop="unit" label="建设单位"></el-table-column>
      <el-table-column prop="department" label="发证机关"></el-table-column>
      <el-table-column prop="dateValue" label="发证日期"></el-table-column>
      <el-table-column prop="unitName" label="工程名称"></el-table-column>
      <el-table-column prop="address" label="建设地址"></el-table-column>
      <el-table-column prop="price" label="合同价格"></el-table-column>
      <el-table-column prop="buildUnit" label="施工单位"></el-table-column>
      <el-table-column prop="hash" label="交易哈希"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status ? 'success' : 'info'">
            {{scope.row.status ? '已上链' : '已缓存'}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column width="140px" prop="cc" label="操作">
        <div class="cc">
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
  props:['lineData', 'totalCount'],
  data() {
    return {
      currentPage: 1,
      pageSizes: [1, 2, 3, 4, 5],
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
    filterTag(value, row) {
      return row.tag === value;
    },
    handleSizeChange(val) {
      this.PageSize = val
      this.currentPage = 1
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
  },
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
