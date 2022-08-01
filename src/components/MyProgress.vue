<template>
  <div class="main" ref="main">
    <div class="progress-bar">
      <span
        class="progress-fill"
        ref="fill"
        :style="{ 'background-color': color }"
      ></span>
    </div>
    <div>
      <span class="progress-tips"
        ><slot>{{ value + '%' }}</slot></span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    color: {
      type: String,
      default: 'pink'
    },
    value: {
      type: [String, Number],
      default: 0
    },
    height: {
      type: [String, Number],
      default: 20
    },
    width: {
      type: [String, Number],
      default: 100
    }
  },

  mounted() {
    this.render()
    this.finish()
  },

  methods: {
    render() {
      this.$refs.fill.style.width = this.value + '%'
      this.$refs.main.style.height = this.height + 'px'
      this.$refs.main.style.width = this.width + 'px'
    },
    finish() {
      if (this.$refs.fill.style.width === '100%') {
        this.$emit('finish')
      }
    }
  }
}
</script>

<style scoped lang="less">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.progress-bar {
  width: 300px;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 20px;
  .progress-fill {
    display: block;
    height: 100%;
    max-width: 100%;
    border-radius: 20px;
    // transition: all .5s;
  }
}
</style>
