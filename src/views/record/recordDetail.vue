<template>
  <div class="record-content">
    <div class="page-content detail-inner">
      <div class="detail-top">
        <div class="top-line">
          <span class="p-block">P</span>&nbsp;&nbsp;
          台州市行政服务中心
        </div>
        <div class="bill-line">{{recordDetail.parkingBill}}<span style="color:#666;font-size:0.4rem;">元</span> </div>
        <div class="parking-condition">交易成功</div>
      </div>
      <div class="detail-block">
        <div class="detail-line flex-con">
          <div class="detail-left">车牌号</div>
          <div class="detail-right">{{recordDetail.carNumber}}</div>
        </div>
        <div class="detail-line flex-con">
          <div class="detail-left">入场时间</div>
          <div class="detail-right">{{recordDetail.beginTime}}</div>
        </div>
        <div class="detail-line flex-con">
          <div class="detail-left">停车时长</div>
          <div class="detail-right">{{recordDetail.longTime}}</div>
        </div>
        <div class="detail-line flex-con">
          <div class="detail-left">出场时间</div>
          <div class="detail-right">{{recordDetail.outTime}}</div>
        </div>
        <div class="detail-line flex-con">
          <div class="detail-left">订单创建时间</div>
          <div class="detail-right">{{recordDetail.createTime}}</div>
        </div>
        <div class="detail-line flex-con">
          <div class="detail-left">支付时间</div>
          <div class="detail-right">{{recordDetail.payTime}}</div>
        </div>
        <div class="detail-line flex-con">
          <div class="detail-left">缴费方式</div>
          <div class="detail-right">{{recordDetail.payType}}</div>
        </div>
        <div class="detail-line flex-con">
          <div class="detail-left">支付方式</div>
          <div class="detail-right">{{recordDetail.payWay}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'record-detail',
  data () {
    return {
      //停车信息
      recordDetail: {
        carNumber: '浙JG8P00',
        beginTime: '2019-08-12 15:30:30',
        longTime: '2小时48分',
        outTime: '2019-08-12 15:30:30',
        createTime: '2019-08-12 15:30:30',
        payTime: '2019-08-12 15:30:30',
        payType: '线上缴费',
        payWay: '微信',
        parkingBill: '11.00'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.record-content {
  background-color: #fff;
  color: #666;
  padding-bottom: 30px;
}
.top-line {
  color: #333;
  font-size: 0.42rem;
  margin-top: 25px;
  margin-bottom: 35px;
  .p-block {
    height: 0.42rem;
    width: 0.42rem;
    line-height: 0.42rem;
    font-size: 0.37rem;
    color: #fff;
    background-color: #1fa7fe;
    border-radius: 0.2rem;
    display: inline-block;
    text-align: center;
    margin-right: 5px;
  }
}
.bill-line {
  font-size: 0.7rem;
  color: #333;
  margin-bottom: 13px;
}
.detail-line {
  font-size: 0.4rem;
  padding-top: 8px;
  padding-bottom: 8px;
}
.parking-condition {
  color: #01c21c;
  font-size: 0.4rem;
  margin-bottom: 25px;
}
</style>