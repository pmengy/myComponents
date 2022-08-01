<template>
  <div class="main">
    <MyButton round @click="click">按钮</MyButton>
    <my-progress
      :value="50"
      color="skyblue"
      :height="30"
      :width="200"
    ></my-progress>
    <my-progress
      :value="50"
      color="orange"
      :height="20"
      :width="300"
      @finish="finish"
    ></my-progress>
  </div>
</template>

<script>
import MyProgress from './components/MyProgress.vue'
export default {
  components: { MyProgress },
  data() {
    return {}
  },

  created() {},

  methods: {
    click() {
      console.log(1)
    },
    finish() {
      console.log('finish')
    }
  }
}
</script>

<style scoped lang="less"></style>
