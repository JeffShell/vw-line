<template>
<div>
  什么都没有，未来添加的页面。
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      message : 'tom'
    }
  },
  methods:{
    a(){
        axios({
          url: 'http://g.cn',
          method: 'post',
          data:{
            posta: 1
          }
        }).then((res) => {
          // 状态码 200 表示请求成功
          if (res.data.code == 200) {
            console.log(res.data)
          } else {
            console.log(res.data)
          }
        })
    }
  },
  created(){
    this.a()
  }

}
</script>

<style scoped>

</style>
