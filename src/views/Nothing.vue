<template>
<div>
  什么都没有，未来添加的页面。
  {{message | capitalize}}
</div>
</template>

<script>
export default {
  name: "Noting.vue",
  data(){
    return {
      message : 'tom'
    }
  },
  filters: {
    capitalize: function (value) {


      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style scoped>

</style>
