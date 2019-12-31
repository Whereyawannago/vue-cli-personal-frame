<template>
  <div class="info-content page-content">
    <div class="parking-info common-block">
      <div class="inner-content">
        <div class="parking-total">
          <div
            class="parking-num"
            :class="parkingInformation.parkingTotal === 0?'is-zero':''"
          >{{parkingInformation.parkingTotal}}</div>
          <div class="parking-name">总车位余量(个)</div>
        </div>
        <div class="top-bottom flex-con">
          <div class="bottom-left bottom-block">
            <div
              class="parking-num"
              :class="parkingInformation.parkingWest === 0?'is-zero':''"
            >{{parkingInformation.parkingWest}}</div>
            <div class="parking-name">东区(个)</div>
          </div>
          <div class="cloum-line"></div>
          <div class="bottom-right bottom-block">
            <div
              class="parking-num"
              :class="parkingInformation.parkingEast === 0?'is-zero':''"
            >{{parkingInformation.parkingEast}}</div>
            <div class="parking-name">西区(个)</div>
          </div>
        </div>
        <!-- 
          停车信息
          1.若无绑定车牌，提示添加车辆
          2.已绑定，判断是否停车，若停车倒计时免费时间，超出免费时间显示总停车时长
          -->
        <cube-button
          v-if="isBindCar === false"
          class="add-car-btn"
          @click="_addCar"
        >添加车辆</cube-button>
        <div
          class="parking-in"
          v-else
        >
          <div
            class="parking-inner"
            v-if="parkingCondition === 0"
          >暂无停车信息</div>
          <div
            class="parking-inner"
            v-else
          >
            <div
              class="parking-text"
              v-if="parkingCondition === 1"
            >请在规定时间内免费出场</div>
            <timer :orderCon="parkingCondition"></timer>
          </div>

        </div>
      </div>
    </div>
    <div class="middle-block common-block">
      <div class="middle-top">取号信息</div>
      <ul class="picking-list">
        <li class="pick-info">取号部门：
          <span class="pick-inner">{{pickNumberInfo.partInfo}}</span>
          <div class="front-point"></div>
        </li>
        <li class="pick-info">取号队列：
          <span class="pick-inner">{{pickNumberInfo.queueInfo}}</span>
          <div class="front-point"></div>
        </li>
        <li class="pick-info">取号状态：
          <span class="pick-inner">{{pickNumberInfo.condition}}</span>
          <div class="front-point"></div>
        </li>
      </ul>
    </div>
    <div class="common-block ">
      <div class="inner-content flex-con bottom-menu">
        <div
          class="menu-one"
          v-for="(item, index) in bottomMenu"
          :key="index"
        >
          <div
            class="menu-pic-con"
            @click="_goPage(item)"
          >
            <img
              :src="item.pic"
              alt=""
              class="menu-pic"
            >
          </div>
          <p class="menu-name">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import timer from '@/components/timer'
export default {
  name: 'parking-index',
  components: {
    timer
  },
  data () {
    return {
      isBindCar: true,
      /**
       * 停车状态
       * 0： 无停车信息
       * 1： 免费停车状态
       * 2： 停车时间超过半小时，显示总停车时间
       * 3： 缴费后出场倒计时
       */
      parkingCondition: 1,
      parkingInformation: {
        parkingTotal: 0,
        parkingWest: 0,
        parkingEast: 0
      },
      pickNumberInfo: {
        partInfo: '暂无',
        queueInfo: '暂无',
        condition: '暂无'
      },
      bottomMenu: [{
        name: '在线取号',
        pic: require('@/assets/images/pick_online.png'),
        isUrl: true
      }, {
        name: '停车记录',
        pic: require('@/assets/images/parking_record.png'),
        isUrl: false,
        to: 'recordList'
      }, {
        name: '个人中心',
        pic: require('@/assets/images/user_center.png'),
        isUrl: false,
        to: 'user'
      }]
    }
  },
  methods: {
    // 传入用户userId
    _goPage (item) {
      this.$router.push({
        name: item.to
      })
    },
    // 绑定车牌
    _addCar () {
      this.$router.push({
        name: 'keyboard'
      })
    }
  }
}
</script>
<style scoped lang="scss">
// 车位
.parking-info {
  padding-bottom: 0px;
}
.parking-total {
  padding-bottom: 15px;
  border-bottom: 1px solid #eeeeee;
}
.parking-num {
  color: #1fa7fe;
  font-size: 0.8rem;
  margin-bottom: 8px;
  &.is-zero {
    color: red;
  }
}
.parking-name {
  color: #666;
  font-size: 0.35rem;
}
.top-bottom {
  overflow: hidden;
  margin-top: 15px;
  .bottom-block {
    width: 45%;
  }
  .cloum-line {
    width: 1px;
    height: 40px;
    background-color: #eee;
  }
}

.add-car-btn {
  background-color: #1fa7fe;
  color: #fff;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 40px;
  letter-spacing: 2px;
  font-size: 0.38rem;
  padding-top: 0.38rem;
  padding-bottom: 0.4rem;
}

.parking-in {
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 0.65rem;
  color: #333;
  font-weight: bold;
}
.parking-text {
  color: #666;
  font-size: 0.36rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

// 取号信息
.middle-top {
  background-image: url('../../assets/images/line.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
  font-size: 0.42rem;
  margin-bottom: 15px;
}
.picking-list {
  width: 92%;
  margin: 0 auto;
  font-size: 0.38rem;
  text-align: left;
  line-height: 0.7rem;
  color: #666;
  .pick-info {
    position: relative;
    padding-left: 0.5rem;
    .pick-inner {
      color: #333;
    }
    .front-point {
      width: 4px;
      height: 4px;
      background-color: #1fa7fe;
      border-radius: 2px;
      position: absolute;
      left: 0.17rem;
      top: 0.32rem;
    }
  }
}

// 底部菜单
.bottom-menu {
  justify-content: space-around;
}
.menu-one {
  font-size: 0.35rem;
  .menu-pic-con {
    margin-bottom: 8px;
    .menu-pic {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
}
</style>