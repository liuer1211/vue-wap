<template>
  <div>
    model
    <!-- <ModelInput v-model="msg"/> -->
    <!-- {{msg}} -->
    <ModelInput :title="title" @changevalue ="changevalue"></ModelInput>
    {{title}}
  </div>
</template>

<script>
import ModelInput from './input.vue'
export default{
  name: "Models",
  components:{
    ModelInput
  },
  data() {
    return {
      msg: '123',
      title: 'zhangsan'
    }
  },
  methods: {
    changevalue(data) {
      this.title = data
    }
  }
}
</script>
