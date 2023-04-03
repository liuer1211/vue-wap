<template>
  <div>
    model
    <!-- <input :value="value" @input="$emit('input',$event.target.value)"/> -->

    <input v-model="tit" @input="changevalue">
  </div>
</template>

<script>

export default{
  props:{
    // value:{
    //   default:""
    // },
    title: {
      default: ""
    }
  },
  data(){
    return{
      tit:''
    }
  },
  mounted() {
    this.tit = this.title
  },
  methods:{
    changevalue() {
      this.$emit('changevalue', this.tit)
    }
  }
}
</script>