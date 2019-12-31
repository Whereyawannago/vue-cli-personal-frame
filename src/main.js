import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import moment from 'moment'
import '@/assets/sass/_transition.scss'
import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  moment,
  render: h => h(App),
}).$mount('#app')
