<template>
  <div class="record-list">
    <!-- <cube-recycle-list
      class="record-list-scroll"
      :size='recordSize'
      :on-fetch="_getRecordList"
    > -->
    <template v-if="recordList.length>0">
      <div
        class="record-one common-block"
        @click="_goDetail"
        :key="index"
        v-for="(item, index) in recordList"
      >
        <div class="page-content">
          <div class="record-top">
            <div class="car-number lf">{{item.carNumber}}
              <div class="line-point"></div>
            </div>
            <div class="parking-con rt">{{item.condition}}</div>

          </div>
          <div class="record-content">
            <div class="record-inner flex-con">
              <div class="record-left">
                <div class="parking-time">停车时长：<span style="color:#333;">{{item.time}}</span></div>
                <div class="pay-time">支付时间：<span style="color:#333">{{item.payTime}}</span></div>
              </div>
              <div class="parking-payment">{{item.bill}}<span class="pay-unit">元</span></div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- </cube-recycle-list> -->
  </div>
</template>

<script>
export default {
  name: 'parking-record',
  data () {
    return {
      recordSize: 10,
      recordList: [{
        carNumber: '浙JG8P00',
        condition: '已成功',
        time: '2小时48分钟',
        payTime: '2019-08-11 16:30:30',
        bill: '5.00'
      }, {
        carNumber: '浙JG8P00',
        condition: '已成功',
        time: '2小时48分钟',
        payTime: '2019-08-11 16:30:30',
        bill: '5.00'
      }]
    }
  },
  methods: {
    _getRecordList () {

    },
    // 未传入ID
    _goDetail () {
      this.$router.push({
        name: 'recordDetail'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.record-list {
  overflow: hidden;
}
.record-one {
  margin-top: 0;
  margin-bottom: 20px;
  border-radius: 0px;
  padding-top: 15px;
  padding-bottom: 20px;
}
.record-top {
  width: 100%;
  overflow: hidden;
  font-size: 0.42rem;
  padding-bottom: 13px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  .car-number {
    position: relative;
    overflow: hidden;
    padding-left: 0.5rem;
    color: #333;
    .line-point {
      width: 4px;
      height: 4px;
      background-color: #1fa7fe;
      border-radius: 2px;
      position: absolute;
      left: 0.17rem;
      top: 0.2rem;
    }
  }
  .parking-con {
    color: #1fa7fe;
  }
}
.record-content {
  font-size: 0.4rem;
  .record-inner {
    width: 94%;
    margin: 0 auto;
    .record-left {
      text-align: left;
      color: #666;
      .parking-time,
      .pay-time {
        line-height: 28px;
      }
    }
  }
}
.parking-payment {
  color: #000;
  font-size: 0.6rem;
  // letter-spacing: 1px;
  .pay-unit {
    font-size: 0.34rem;
  }
}
</style>