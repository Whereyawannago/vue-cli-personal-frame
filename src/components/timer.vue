<template>
  <div class="timer-con">
    <span
      class="timer-text"
      v-if="hour>0"
    >{{hour}}小时</span>
    <span class="timer-text">{{minute}}分</span>
    <span class="timer-text">{{second}}秒</span>
  </div>
</template>

<script>
export default {
  name: 'timer',
  data () {
    return {
      hour: 0,
      minute: 0,
      second: 0
    }
  },
  props: {
    /**
     * 计时器顺序或者倒叙order||reverse
     */
    orderCon: {
      type: Number,
      default: 1
    },
    /**
     * 起始时间目标时间
     */
    startTime: {
      type: String,
      default: '0'
    }
  },
  mounted () {
    // 开始计时
    this._loadInterval()
  },
  methods: {
    _loadInterval () {
      if (this.orderCon === 2) {
        this._orderInterVal()
      } else {
        this._reverseInterval()
      }
    },
    // 获取当前停车时长并计时
    _orderInterVal () {
      this._startInterval('order')
    },
    // 免费停车时长以及出场时长倒计时 => 0:0:0
    _reverseInterval () {
      this.minute = this.orderCon === 1 ? 30 : 15
      this._startInterval('reverse')
    },

    /**
     * 计时器
     * @param {string} order
     */
    _startInterval (order) {
      let that = this
      if (order === 'reverse') {
        this.second = this.second === 0 && this.minute !== 0 ? 59 : this.second - 1
        this.minute = this.second === 59 && this.minute !== 0 ? this.minute - 1 : this.minute
        if (this.minute !== 0) {
          setTimeout(() => {
            that._startInterval('reverse')
          }, 1000)
        }
      } else {
        this.second += 1
        this.minute = this.second === 0 ? this.minute + 1 : this.minute
        this.hour = this.minute === 0 ? this.hour + 1 : this.hour
        setTimeout(() => {
          that._startInterval('order')
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.timer-text {
  font-size: 0.6rem;
  color: #333333;
  letter-spacing: 2px;
}
</style>