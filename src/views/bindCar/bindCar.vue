<template>
  <div class="bind-content">
    <div class="page-title">请输入您的车牌号</div>
  </div>
</template>
<script>
export default {
  name: 'bind-car',
  data () {
    return {
      bindInfo: {
        carNumber: '',
        initType: ''
      }
    }
  }
}
</script>
<style lang="scss">
</style>