<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="hanldAxiosFun">
      点击事件
    </div>
  </div>
</template>

<script>
import axiosFun from "../utils/request"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    async hanldAxiosFun() {
      let data = {
        name: 'moke',
        age: 12
      }
      axiosFun(data).then(res=>{
        console.log("=======", res)
      })
      let res = await axiosFun(data);
      console.log("-----",res)
    }
  }
}
</script>

<style scoped>

</style>
