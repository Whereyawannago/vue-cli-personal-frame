<template>
  <div id="dispense">
    <div class="top-con">
      <div class="content-car-number">
        <div class="keyboard-title">请输入您的车牌</div>
        <div class="content-section">
          <div class="content-section-flex flex-card">
            <div class="content-section-flex flex-card-border">
              <button
                id="font"
                class="flex-btn"
                @click="btnClickYue"
                v-bind:class="{isClick: isYue }"
              >
                {{areaName}}
              </button>
              <!-- <span class="blank-border blank-border-first"></span> -->
              <button
                id='letter'
                class="flex-btn"
                @click="btnClickA"
                v-bind:class="{isClick: isA}"
              >
                {{areaLetter}}
              </button>
              <div class="flex-mid"><span></span></div>
              <div class="flex-btns">
                <button
                  id='numOne'
                  @click="btnClickNum('one')"
                  v-bind:class="{isNumClick: isNumOne }"
                >{{numOne}}</button>
                <!-- <span class="blank-border"></span> -->
                <button
                  id='numTwo'
                  @click="btnClickNum('two')"
                  v-bind:class="{isNumClick: isNumTwo }"
                >{{numTwo}}</button>
                <!-- <span class="blank-border"></span> -->
                <button
                  id='numThree'
                  @click="btnClickNum('three')"
                  v-bind:class="{isNumClick: isNumThree }"
                >{{numThree}}
                </button>
                <!-- <span class="blank-border"></span> -->
                <button
                  id='numFour'
                  @click="btnClickNum('four')"
                  v-bind:class="{isNumClick: isNumFour }"
                >{{numFour}}
                </button>
                <!-- <span class="blank-border"></span> -->
                <button
                  id='numFive'
                  @click="btnClickNum('five')"
                  v-bind:class="{isNumClick: isNumFive }"
                >{{numFive}}
                </button>
                <!-- <span
                class="blank-border"
                v-if="checkbox"
              ></span> -->
                <button
                  v-if="checkbox"
                  id='numSix'
                  @click="btnClickNum('six')"
                  style="border:1px dotted #17DC2A"
                  v-bind:class="{isNumClick: isNumSix }"
                >{{numSix}}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="car-content-title">
          <!-- <span>车牌号</span> -->
          <label class="ze-checkbox"><input
              type="checkbox"
              v-model="checkbox"
              @change="carTypeChange"
            >
            <span
              class="ze-checkbox-icon"
              style="width: 15px;height: 15px;color: rgb(76, 216, 100bo'r);border-radius:10px;"
            >
              <i style="width: 6px;height: 12px;"></i>
            </span>
            <span class="ze-checkbox-text">新能源</span>
          </label>
        </div>
      </div>
    </div>

    <div class="searchPay-btn">
      <button class="add-car">确认添加车辆</button>
    </div>

    <div
      class="keyboard"
      v-if="keyboardShow"
      :class='{animationDown:isDown,animationUp:isUp}'
    >
      <button
        class="btn-complete"
        @click="completeClick"
      ><span>完成</span></button>
      <div v-if="keyboard == 'txt'">
        <div
          class="keyboard-row"
          v-for="(item,rows) in carTxt"
          :key="rows"
        >
          <button
            class="keyboard-row-item"
            v-for="(i,index) in item.name"
            :key="index"
            @click="btnWordClick(rows,index,i)"
          >{{i}}
          </button>
        </div>
        <div class="keyboard-row">
          <!-- <div class="keyboard-row-items"> -->
          <div>
            <button
              class="keyboard-row-item bottom"
              @click="btnBottomClick('新')"
            >新</button>
            <button
              class="keyboard-row-item bottom"
              @click="btnBottomClick('临')"
            >临</button>
          </div>

          <!-- <button
            v-for="(j,index) in noneBottomtxt"
            :key="index"
            class="none-botton"
          >{{j}}</button> -->
          <div
            class="keyboard-row-item clear"
            @click="clearClick"
          >
            <img
              src="../../assets/images/icon_input_delete.png"
              alt="删除"
            >
          </div>
        </div>

      </div>
      <div v-if="keyboard == 'num'">
        <div
          class="keyboard-row"
          v-for="(item,rows) in carNum"
          :key="rows"
        >
          <button
            :disabled="!isSelectl?isDisable && i<10 :isDisable&& rows!=0 "
            class="keyboard-row-item"
            v-for="(i,index) in item.name"
            :key="index"
            @click="btnWordClick(rows,index,i)"
          >{{i}}
          </button>
        </div>
        <div class="keyboard-row">
          <!-- <div class="keyboard-row-bottom"> -->
          <div>
            <button
              :disabled="isSelectl"
              v-for="(item,index) in carNumBottom"
              :key="index"
              class="keyboard-row-item bottom"
              @click="btnBottomNumClick(item)"
            >{{item}}
            </button>
          </div>

          <!-- <button
            v-for="(j,index) in noneBottom"
            :key="index"
            class="none-botton"
          >{{j}}</button> -->
          <div
            class="keyboard-row-item clear"
            @click="clearClick"
          >
            <img
              src="../../assets/images/icon_input_delete.png"
              alt="删除"
            >
          </div>
          <!-- </div> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {ADD_VEHICLE} from '../url'
export default {
  name: 'Dispense',
  data () {
    return {
      isFeeHourClick: false,
      checkbox: false,
      isDown: false,
      isUp: false,
      selected: null,
      isSelectx: false,
      isSelectl: false,
      key: 1,
      areaName: '',
      areaLetter: '',
      numOne: '',
      numTwo: '',
      numThree: '',
      numFour: '',
      numFive: '',
      numSix: '',
      isYue: false,
      keyboardShow: false,
      keyboard: false,
      isA: false,
      isNumOne: false,
      isNumTwo: false,
      isNumThree: false,
      isNumFour: false,
      isNumFive: false,
      isNumSix: false,
      isDisable: false,
      isOne: false,
      isTwo: false,
      isThree: false,
      isFour: false,
      isFive: false,
      isSix: false,
      isSeven: false,
      isEight: false,
      isOther: false,
      carTxt: [
        { name: ['粤', '京', '冀', '沪', '津', '晋', '蒙', '辽', '吉', '黑'] },
        { name: ['苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '桂'] },
        { name: ['琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁'] }
      ],
      carNumBottom: ['W', 'X', 'Y', 'Z'],
      noneBottom: ['', '', '', ''],
      noneBottomtxt: ['', '', '', '', '', ''],
      carNum: [
        { name: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'] },
        { name: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'] },
        { name: ['L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'] }
      ],
      addedCarNum: ''
    }
  },
  watch: {
    checkbox: function (val) {
      this.isNumOne = false
      this.isNumTwo = false
      this.isNumThree = false
      this.isNumFour = false
      this.isNumFive = false
      this.isNumSix = false
      const vm = this
      if (!val) { // 切换到普通车牌
        if (vm.numFour) {
          vm.isNumFive = true
          vm.key = 7
          window.console.log(4, val)
        }
      } else { // 切换到新能源车牌
        if (vm.numFive) {
          vm.isNumSix = true
          vm.key = 8
          window.console.log(3, val)
        }
      }
    }
  },
  methods: {
    feeHourClick (val) {
      if (this.areaName && this.areaLetter && this.numOne && this.numTwo && this.numThree && this.numFour && this.numFive) {
        if (this.checkbox && this.numSix) {
          this.isFeeHourClick = true
        } else if (!this.checkbox) {
          this.isFeeHourClick = true
        }
      }
      this.keyboardShow = false
      if (val === 'one') {
        this.isOne = true
        this.isTwo = false
        this.isThree = false
        this.isFour = false
        this.isFive = false
        this.isSix = false
        this.isSeven = false
        this.isEight = false
        this.isOther = false
      } else if (val === 'two') {
        this.isTwo = true
        this.isOne = false
        this.isThree = false
        this.isFour = false
        this.isFive = false
        this.isSix = false
        this.isSeven = false
        this.isEight = false
        this.isOther = false
      } else if (val === 'three') {
        this.isThree = true
        this.isTwo = false
        this.isOne = false
        this.isFour = false
        this.isFive = false
        this.isSix = false
        this.isSeven = false
        this.isEight = false
        this.isOther = false
      } else if (val === 'four') {
        this.isFour = true
        this.isTwo = false
        this.isThree = false
        this.isOne = false
        this.isFive = false
        this.isSix = false
        this.isSeven = false
        this.isEight = false
        this.isOther = false
      } else if (val === 'five') {
        this.isFive = true
        this.isTwo = false
        this.isThree = false
        this.isFour = false
        this.isOne = false
        this.isSix = false
        this.isSeven = false
        this.isEight = false
        this.isOther = false
      } else if (val === 'six') {
        this.isSix = true
        this.isTwo = false
        this.isThree = false
        this.isFour = false
        this.isFive = false
        this.isOne = false
        this.isSeven = false
        this.isEight = false
        this.isOther = false
      } else if (val === 'seven') {
        this.isSeven = true
        this.isTwo = false
        this.isThree = false
        this.isFour = false
        this.isFive = false
        this.isSix = false
        this.isOne = false
        this.isEight = false
        this.isOther = false
      } else if (val === 'eight') {
        this.isEight = true
        this.isTwo = false
        this.isThree = false
        this.isFour = false
        this.isFive = false
        this.isSix = false
        this.isSeven = false
        this.isOne = false
        this.isOther = false
      } else if (val === 'other') {
        this.isOther = true
        this.isTwo = false
        this.isThree = false
        this.isFour = false
        this.isFive = false
        this.isSix = false
        this.isSeven = false
        this.isEight = false
        this.isOne = false
      }
    },
    carTypeChange (val) {
      this.isNumOne = false
      this.isNumTwo = false
      this.isNumThree = false
      this.isNumFour = false
      this.isNumFive = false
      this.isNumSix = false
      if (!val) { // 切换到普通车牌
        if (this.numFour) {
          this.isNumFive = true
          this.key = 7
        }
      } else { // 切换到新能源车牌
        if (this.numFive) {
          this.isNumSix = true
          this.key = 8
        }
      }
    },
    btnClickYue () {
      this.isYue = true
      this.isA = false
      this.isUp = true
      this.isNumOne = false
      this.isNumTwo = false
      this.isNumThree = false
      this.isNumFour = false
      this.isNumFive = false
      this.isNumSix = false
      this.keyboardShow = true
      this.keyboard = 'txt'
      this.key = 1
    },
    btnWordClick (rows, index, i) {
      this.selected = i
      if (this.key === 1) {
        if (this.areaName === '临') {
          this.areaLetter = ''
          this.numOne = ''
          this.numTwo = ''
          this.numThree = ''
          this.numFour = ''
          this.numFive = ''
          this.numSix = ''
        }
        this.areaName = i
        this.isSelectl = false
        document.getElementById('letter').click()
      } else if (this.key === 2) {
        this.areaLetter = i
        document.getElementById('numOne').click()
      } else if (this.key === 3) {
        this.numOne = i
        document.getElementById('numTwo').click()
      } else if (this.key === 4) {
        this.numTwo = i
        document.getElementById('numThree').click()
      } else if (this.key === 5) {
        this.numThree = i
        document.getElementById('numFour').click()
      } else if (this.key === 6) {
        this.numFour = i
        document.getElementById('numFive').click()
      } else if (this.key === 7) {
        this.numFive = i
        if (this.checkbox) {
          document.getElementById('numSix').click()
        }
      } else if (this.key === 8) {
        this.numSix = i
      }
      if (this.key === 7 || this.key === 8) {
        this.carNumBottom = ['W', 'X', 'Y', 'Z', '港', '澳', '学']
        this.noneBottom = ['']
      } else if (this.key === 3 || this.key === 4 || this.key === 5 || this.key === 6) {
        this.carNumBottom = ['W', 'X', 'Y', 'Z']
        this.noneBottom = ['', '', '', '']
      }
    },
    btnBottomClick (val) {
      if (val === '新') {
        if (this.areaName === '临') {
          this.areaLetter = ''
          this.numOne = ''
          this.numTwo = ''
          this.numThree = ''
          this.numFour = ''
          this.numFive = ''
          this.numSix = ''
        }
        this.areaName = '新'
        this.isSelectx = true
        this.isSelectl = false
        document.getElementById('letter').click()
      } else if (val === '临') {
        this.areaName = '临'
        this.isSelectl = true
        this.isSelectx = false
        this.isDisable = true
        this.areaLetter = ''
        this.numOne = ''
        this.numTwo = ''
        this.numThree = ''
        this.numFour = ''
        this.numFive = ''
        this.numSix = ''
        document.getElementById('letter').click('isLin')
      }
    },
    btnBottomNumClick (i) {
      this.selected = i
      if (this.key === 2) {
        this.areaLetter = i
        document.getElementById('numOne').click()
      } else if (this.key === 3) {
        this.numOne = i
        document.getElementById('numTwo').click()
      } else if (this.key === 4) {
        this.numTwo = i
        document.getElementById('numThree').click()
      } else if (this.key === 5) {
        this.numThree = i
        document.getElementById('numFour').click()
      } else if (this.key === 6) {
        this.numFour = i
        document.getElementById('numFive').click()
      } else if (this.key === 7) {
        this.numFive = i
        if (this.checkbox) {
          document.getElementById('numSix').click()
        }
      } else if (this.key === 8) {
        this.numSix = i
      }
    },
    btnClickA () {
      this.isDisable = true
      this.isA = true
      this.isYue = false
      this.isUp = true
      this.isNumOne = false
      this.isNumTwo = false
      this.isNumThree = false
      this.isNumFour = false
      this.isNumFive = false
      this.isNumSix = false
      this.keyboardShow = true
      this.keyboard = 'num'
      this.key = 2
    },
    btnClickNum (name) {
      if (this.isSelectl) {
        this.isDisable = true
      } else {
        this.isDisable = false
      }
      this.keyboard = 'num'
      this.keyboardShow = true
      this.isYue = false
      this.isA = false
      this.isNumOne = false
      this.isNumTwo = false
      this.isNumThree = false
      this.isNumFour = false
      this.isNumFive = false
      this.isNumSix = false
      this.isUp = true
      if (name === 'one') {
        this.isNumOne = true
        this.key = 3
      } else if (name === 'two') {
        this.isNumTwo = true
        this.key = 4
      } else if (name === 'three') {
        this.isNumThree = true
        this.key = 5
      } else if (name === 'four') {
        this.isNumFour = true
        this.key = 6
      } else if (name === 'five') {
        this.isNumFive = true
        this.key = 7
      } else if (name === 'six') {
        this.isNumSix = true
        this.key = 8
      }
      if (name === 'five' || name === 'six') {
        this.carNumBottom = ['W', 'X', 'Y', 'Z', '港', '澳', '学']
        this.noneBottom = ['']
      } else {
        this.carNumBottom = ['W', 'X', 'Y', 'Z']
        this.noneBottom = ['', '', '', '']
      }
    },
    completeClick () {
      this.isYue = false
      this.isA = false
      this.isNumOne = false
      this.isNumTwo = false
      this.isNumThree = false
      this.isNumFour = false
      this.isNumFive = false
      this.isNumSix = false
      this.isUp = false
      this.isDown = true
      this.keyboardShow = false
    },
    clearClick () {
      if (this.key === 1) {
        this.areaName = ''
      } else if (this.key === 2) {
        document.getElementById('font').click()
        this.areaLetter = ''
      } else if (this.key === 3) {
        document.getElementById('letter').click()
        this.numOne = ''
      } else if (this.key === 4) {
        document.getElementById('numOne').click()
        this.numTwo = ''
      } else if (this.key === 5) {
        document.getElementById('numTwo').click()
        this.numThree = ''
      } else if (this.key === 6) {
        document.getElementById('numThree').click()
        this.numFour = ''
      } else if (this.key === 7) {
        document.getElementById('numFour').click()
        this.numFive = ''
      } else if (this.key === 8) {
        document.getElementById('numFive').click()
        this.numSix = ''
      }
    },
    addCar () {
      var num
      if (!this.checkbox) {
        num = this.areaName + this.areaLetter + this.numOne + this.numTwo + this.numThree + this.numFour + this.numFive
      } else if (this.checkbox) {
        num = this.areaName + this.areaLetter + this.numOne + this.numTwo + this.numThree + this.numFour + this.numFive + this.numSix
      }
      if (num === '') {
        this.$dialog.toast({ mes: '请输入车牌', timeout: 1000 })
      } else if (!this.checkbox && (this.areaName === '' || this.areaLetter === '' || this.numOne === '' || this.numTwo === '' || this.numThree === '' || this.numFour === '' || this.numFive === '')) {
        this.$dialog.toast({ mes: '请输入完整车牌', timeout: 1000 })
      } else if (this.checkbox && (this.areaName === '' || this.areaLetter === '' || this.numOne === '' || this.numTwo === '' || this.numThree === '' || this.numFour === '' || this.numFive === '' || this.numSix === '')) {
        this.$dialog.toast({ mes: '请输入完整车牌', timeout: 1000 })
      } else {
        // let data = {
        //     vehiclenum: num
        // }
        // this.$http.post(ADD_VEHICLE, data).then(res => {
        //   if (res.data.ret === 0) {
        //     this.addedCarNum = num
        //     this.$router.push({name: 'AddSuccess', params: {addedCarNum: this.addedCarNum}})
        //   } else {
        //     this.$dialog.toast({mes:res.data.message,timeout:1200})
        //   }
        // })
      }
    }
  },
  mounted () {
    this.btnClickYue()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.areaName = ''
      vm.areaLetter = ''
      vm.numOne = ''
      vm.numTwo = ''
      vm.numThree = ''
      vm.numFour = ''
      vm.numFive = ''
      vm.numSix = ''
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.top-con {
  overflow: hidden;
  background-color: #fff;
}
.keyboard-title {
  color: #333;
  margin-bottom: 0.75rem;
  font-size: 0.7rem;
}
#dispense {
  .navbar {
    .right {
      a {
        font-size: 30px;
        color: #1fa7fe;
      }
    }
  }
  .ze-checkbox > input[type='checkbox'] {
    position: absolute;
    left: -9999em;
  }

  .ze-checkbox > input[type='checkbox']:checked + .ze-checkbox-icon {
    background-color: currentColor;
    border-color: #1fa7fe;
  }

  .ze-checkbox-icon {
    border: 1px solid #ccc; /*no*/
    border-radius: 2px;
    display: inline-block;
    position: relative;
    z-index: 10;
    vertical-align: bottom;
    pointer-events: none;
    > i {
      content: '';
      position: absolute;
      top: 45%;
      left: 50%;
      border: 3px solid #fff; /*no*/
      border-top: 0;
      border-left: 0;
      -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
      transform: translate(-50%, -50%) rotate(45deg) scale(0);
    }
  }

  .ze-checkbox > input[type='checkbox']:checked + .ze-checkbox-icon > i {
    -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(1);
    transform: translate(-50%, -50%) rotate(45deg) scale(1);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  // background-color: #fff;
  .content-car-number {
    padding: 1.5rem 0 0;
    .car-content-title {
      // display: flex;
      // justify-content: space-between;
      padding: 0 32px;
      margin-bottom: 3rem;
      overflow: hidden;
      margin-top: 0.5rem;
      span {
        font-size: 0.45rem;
      }
      .ze-checkbox {
        display: flex;
        align-items: center;
        float: right;
      }
      .ze-radio-text {
        font-size: 28px;
      }
      .ze-checkbox-icon {
        // color: #ffedb1 !important;
        color: #1fa7fe !important;
        margin-right: 8px;
      }
    }
    .content-section {
      .content-section-flex {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        // margin-bottom: 35px;
        .blank-border {
          height: 44px;
          width: 1px; /*no*/
          border-right: 1px solid #ddd; /*no*/
          margin-top: 27px;
          float: left;
          margin-left: -15px;
          z-index: 1;
          &.blank-border-first {
            margin-top: 0px;
          }
        }
        &.flex-card {
          color: #333;
          .flex-btn {
            // width: 60px;
            // height: 78px;
            width: 1rem;
            height: 1.2rem;
            border: 1px solid #ccc;
            text-align: center;
            background: #fff;
            font-size: 0.68rem;
            color: #333;
            margin-right: 5px;
            &:focus {
              border-color: #1fa7fe;
            }
          }
          .flex-btns {
            text-align: center;
            background: #fff;
            width: fit-content;
            position: relative;
            // height: 98px;
            &:focus {
              border-color: #1fa7fe;
            }
            button {
              // width: 60px;
              // height: 78px;
              width: 1rem;
              height: 1.2rem;
              border: none;
              font-size: 0.68rem;
              color: #333;
              // border-radius: 50%;
              background: transparent;
              float: left;
              // margin-left: -20px;
              z-index: 2;
              position: relative;
              border: 1px solid #ccc;
              margin-right: 5px;
              &:first-child {
                margin-left: 0;
              }
            }
          }
          .flex-mid {
            margin: 0 0.1rem;
            span {
              display: block;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #ddd;
            }
          }
          .isClick {
            border: 1px solid #1fa7fe; /*no*/
            z-index: 50;
            // border-radius: 8px;
          }
          .isNumClick {
            // border-radius: 8px !important;
            border: 1px solid #1fa7fe !important; /*no*/
            z-index: 10;
            background-color: #fff !important;
          }
        }
        .flex-card-border {
          // border: 1px solid #ddd; /*no*/
          border-radius: 8px;
        }
      }
    }
  }
  .fee-hours {
    padding: 0 32px;
    margin-bottom: 80px;
    .fee-hours-title {
      margin-bottom: 16px;
      font-size: 34px;
    }
    .fee-hours-content {
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;
      &.fee-hours-num {
        display: block;
      }
    }
    .fee-hours-num {
      width: 152px;
      height: 64px;
      font-size: 28px;
      background: #ececec;
      border-radius: 8px;
      text-align: center;
      line-height: 64px;
    }
    .isFeeHour {
      background: #ffeeb1;
    }
  }
  .searchPay-btn {
    text-align: center;
    /*background-color: #f6f6f6;*/
    margin: 0 32px 0;
    margin-top: 20px;
    &:focus {
      border-color: #1fa7fe;
    }
    button {
      color: #ffffff;
      font-size: 0.853333rem;
      background: #1fa7fe;
      border-radius: 4px;

      border: none;
      width: 100%;
      font-size: 0.6rem;
      padding: 0.23rem;
      // border-radius: 8px;
      &.searchPay-btn-click {
        box-shadow: 0px 5px 10px 0px rgba(255, 227, 135, 1);
        background: #1fa7fe;
        color: #101010;
      }
    }
  }
  .keyboard {
    width: 100%;
    // height: 502px;
    height: 9rem;
    position: fixed;
    bottom: -502px;
    background: #eeeeee;
    z-index: 10;
    &.animationDown {
      animation: slide_dowms 0.3s ease-out;
      animation-fill-mode: forwards;
    }
    &.animationUp {
      animation: slide_ups 0.3s ease-out;
      animation-fill-mode: forwards;
    }
    .btn-complete {
      height: 1.2rem;
      text-align: right;
      color: #1fa7fe;
      font-size: 0.7rem;
      width: 100%;
      background: #fff;
      border: none;
      border-top: 1px solid #eee;
      margin-bottom: 30px;
      span {
        margin-right: 30px;
      }
    }
    .keyboard-row {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      padding: 0 8px;
      color: #333;
      &:first-child {
        margin-top: 0;
      }
      .keyboard-row-items {
        display: flex;
        justify-content: left;
      }
      .keyboard-row-bottom {
        display: flex;
        justify-content: space-between;
      }
      .keyboard-row-item {
        width: 0.85rem;
        height: 1.1rem;
        background: #fff;
        font-size: 0.45rem;
        text-align: center;
        border: 1px solid #ccc; /*no*/
        // border-radius: 10px;
        color: #333;
        &.bottom {
          width: 0.85rem;
          height: 1.2rem;
          line-height: 1.2rem;
          background: #fff;
          color: #333;
          margin-right: 5px;
          /*margin-right: 0.08rem;*/
        }
        &.clear {
          width: 2rem;
          height: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 1.2rem;
          }
        }
      }
      .none-botton {
        border: none;
        height: 80px;
        width: 66px;
        visibility: hidden;
      }
    }
    button {
      &:active {
        background: #f4f4f4 !important;
        color: #999 !important;
      }
    }
  }
  @keyframes slide_ups {
    from {
      bottom: -502px;
    }
    to {
      bottom: 0px;
    }
  }
  @keyframes slide_dowms {
    from {
      bottom: 0px;
    }
    to {
      bottom: -502px;
    }
  }
  button:disabled {
    background: #f4f4f4 !important;
    color: #8f8f8f !important;
  }
  .active {
    &:active {
      background: #f4f4f4 !important;
      color: #999 !important;
    }
  }
}
</style>
