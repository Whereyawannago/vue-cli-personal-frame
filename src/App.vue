<template>
  <div id="app">
    <transition :name="transitionName">
      <!-- <keep-alive :inclue="cachedPages"> -->
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
    ...mapGetters(['cachedPages', 'transitionName'])
  },
  data () {
    return {
      bodyHeight: 0,
      toast: null
    }
  },
  mounted () {
    // let heights = document.body.clientHeight
    // this.bodyHeight = heights + 'px'
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

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
