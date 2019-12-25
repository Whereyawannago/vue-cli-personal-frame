<template>
  <div class="info-content content-block">
    <div class="top-block common-block">
      <div>{{parkingInformation.parkingTotal}}</div>
      <div class="top-bottom"></div>
    </div>
    <div class="middle-block common-block"></div>
    <div class="bottom-menu common-block"></div>
  </div>
</template>

<script>
export default {
  name: 'parking-index',
  data () {
    return {
      parkingInformation: {
        parkingTotal: 0,
        parkingWest: 0,
        parkingEast: 0
      },
      pickNumberInfo: {},
      menuPic: {}
    }
  }
}
</script>
<style scoped lang="scss">
</style>