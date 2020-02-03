<template>
  <div
    id="app"
    :style="{'height': bodyHeight}"
    v-loading="isLoading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)"
  >
    <transition :name="transitionName">
      <router-view
        class="page-container"
        ref="page"
      >
      </router-view>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {},
  provide () {
    return {
      refresh: this.refresh,
      refreshEnd: this.refreshEnd
    }
  },
  computed: {
    ...mapGetters(['cachedPages', 'transitionName', 'isloading'])
  },
  data () {
    return {
      bodyHeight: 0,
      toast: null
    }
  },
  mounted () {
    // let heights = document.body.clientHeight
    let heights = window.innerHeight
    this.bodyHeight = heights + 'px'
  },
  methods: {
    refresh (e, txt) {
      this.toast = this.$createToast({
        time: 0,
        txt: txt || '???...'
      })
      this.toast.show()
      this.$router.replace({ path: '/redirect' + this.$route.fullPath })
    },
    refreshEnd () {
      setTimeout(() => {
        this.toast && this.toast.hide()
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
@import '@/style/common.scss';
#app {
  width: 100%;
  height: 100%;
  background-color: #f7f4f4;
}
</style>
