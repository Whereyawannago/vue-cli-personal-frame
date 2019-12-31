<template>
  <div class="user-content ">

    <div class="head-line">
      <div class="page-content user-line flex-con">
        <div class="line-head ">
          <img
            class="head-pic"
            :src="userInfo.userHead"
            alt=""
          >
        </div>
        <div class="line-name">{{userInfo.userName}}</div>
      </div>
    </div>

    <div class="info-line">
      <div class="page-content flex-con user-line">
        <div class="line-title">绑定手机</div>
        <div
          class="line-name"
          v-if="userInfo.bindPhone!=='--'"
        >{{userInfo.bindPhone}}</div>
        <div
          class="line-arrow"
          v-else
        ><img
            src="../../assets/images/arrow_right.png"
            alt=""
          ></div>
      </div>
    </div>
    <div class="info-line">
      <div class="page-content flex-con user-line">
        <div class="line-title">车辆管理</div>
        <div class="line-arrow"><img
            src="../../assets/images/arrow_right.png"
            alt=""
          ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-page',
  data () {
    return {
      userInfo: {
        userHead: require('@/assets/images/head_pic.png'),
        userName: '微信昵称',
        bindPhone: '--'
      }
    }
  },
  methods: {
    _getUserInfo () { }
  }
}
</script>
<style lang="scss" scoped>
.user-content {
  background-color: #fff;
}
.head-line {
  padding-top: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f7f4f4;
  .user-line {
    justify-content: flex-start;
    .line-head {
      width: 60px;
      height: 60px;
      border: 1px solid #ccc;
      border-radius: 30px;
      .head-pic {
        width: 60px;
        height: 60px;
      }
    }
    .line-name {
      color: #333;
      font-size: 0.42rem;
      margin-left: 15px;
    }
  }
}

.info-line {
  padding-top: 18px;
  padding-bottom: 18px;
  font-size: 0.42rem;
  border-bottom: 1px solid #f7f4f4;
}
.line-name {
  color: #999;
}
.line-arrow {
  img {
    width: 20px;
    height: 20px;
  }
}
</style>