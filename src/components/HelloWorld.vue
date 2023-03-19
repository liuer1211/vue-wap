<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="hanldAxiosFun">
      点击事件
    </div>
  </div>
</template>

<script>
import {axiosFun} from "../utils/api"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    // 点击事件
    async hanldAxiosFun() {
      let data = {
        name: 'moke',
        age: 12
      }
      axiosFun(data).then(res=>{
        console.log("响应数据=", res)
      })
      
      let data1 = {
        name: 'jack',
        age: 23
      }
      let res = await axiosFun(data1);
      console.log("响应数据1--",res)
    }
  }
}
</script>

<style scoped>

</style>
