<template>
  <div>
    <div class="form-inquire">
      <BlockchainForm/>
      <TableInquire :backgroundData="backgroundData" @childByValue="childByValue"/>
    </div>
    <Table :lineData="lineData" :totalCount="totalCount"/>
  </div>
</template>

<script>
import BlockchainForm from "@/components/BlockchainForm.vue"
import TableInquire from "@/components/TableInquire.vue"
import Table from "@/components/Table.vue"
import axios from "axios";

export default {
  data(){
    return {
      lineData: [],
      backgroundData: [],
      totalCount: 10,
    }
  },
  components: {
    BlockchainForm,
    TableInquire,
    Table
  },
  methods: {
    childByValue(childValue){
      this.lineData = childValue
    },
    getData() {
      axios.get('https://api.mocksys.com/api/v1/mock/20043/get/kxlm')
          .then((response) => {
            this.backgroundData = response.data.data
            this.lineData = this.backgroundData
            this.totalCount = this.backgroundData.length
          }).catch(function (error) {
        console.log(error);
      })
    },
  },
  created() {
    this.getData()
  }
}
</script>

<style scoped>
.form-inquire {
  margin-bottom: 20px;

}
</style>
