<template>
  <div class="hello">
    指令：
    <div v-changeBig="username"></div>
    <div v-changeSlice="username"></div>
    
    过滤器
    <div>{{address | changeToLowerCase(username)}}</div>方法：
    <div>{{changeBigs(username)}}</div>
  </div>
</template>

<script>

export default {
  name: 'Directives',
  data() {
    return {
      username: "jack",
      address: "SHANGHAI"
    }
  },
  methods: {
    changeBigs(value) {
      console.log("mo==",value)
      return value.toUpperCase()
    }
  },
  filters: {
    changeToLowerCase(value,date){
      console.log("==",value,date)
      return value.toLowerCase();
    }
  },
  directives:{
    // 函数式
    // 1 指令与元素绑定 2 指令所在模板重新接解析
    changeBig(element,binding){
      console.log(element, binding)
      element.innerHTML = binding.value.toUpperCase()
    },
    // 对象式
    changeSlice:{
      // 只调用一次 指令 元素 成功绑定
      bind(el,binding,vnode) {
        console.log('指令=',el,binding,vnode)
        el.innerHTML = binding.value.slice(0,2)
      },
      // 指令所在元素插入页面 仅保证父节点存在，但不一定已被插入文档中
      inserted() {},
      // 所在组件的 VNode 更新时调用
      update(el,binding,vnode,oldVnode) {},
      // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
      componentUpdated(el,binding,vnode,oldVnode) {},
      // 只调用一次，指令与元素解绑时调用。
      unbind() {}
      // element.innerHTML = binding.value.slice(0,2)
    }
  },
}
</script>

<style scoped>

</style>
