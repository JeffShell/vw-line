<template>
  <div>
    <BlockchainForm/>
    <TableInquire/>
    <Table/>
  </div>
</template>

<script>
import BlockchainForm from "@/components/BlockchainForm.vue"
import TableInquire from "@/components/TableInquire.vue"
import Table from "@/components/Table.vue"
export default {
  components: {
    BlockchainForm,
    TableInquire,
    Table
  }
}
</script>

<style scoped>
</style>
