import Vue from 'vue'
// import config from '../config'
// import store from '@/store'
import Router from 'vue-router'

Vue.use(Router)
/**
 * name : 'home'                   route name(required)
 * meta : {
 *    noAuth: true                 if set true, not need login
 *    cache: true                  if set true, the page will cached(default is false)
 *    showHeader: true             if set true, the app will show app-header
 *    showFooter: true             if set true, the app will show app-footer
 * }
 **/
let routerMap = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['@/views/home'], resolve)
  },
  {
    path: '/recordList',
    name: 'recordList',
    component: resolve => require(['@/views/record/record'], resolve)
  },
  {
    path: '/recordDetail',
    name: 'recordDetail',
    component: resolve => require(['@/views/record/recordDetail'], resolve)
  },
  {
    path: '/user',
    name: 'user',
    component: resolve => require(['@/views/user/user'], resolve)
  },
  {
    path: '/keyboard',
    name: 'keyboard',
    component: resolve => require(['@/views/bindCar/keyboard'], resolve)
  }
]

export { routerMap }

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})

// const { go, push, replace, back, forword } = router
// const { go, back } = router

// router.go = (location) => {
//   if (location > 0) {
//     store.dispatch('updateTransitionName', 'slide-left')
//   } else if (location < 0) {
//     store.dispatch('updateTransitionName', 'slide-right')
//   }
//   go.call(this, location)
// }

// router.push = (location) => {
//   let that = this
//   if (location.back) {
//     store.dispatch('updateTransitionName', 'slide-right')
//   } else {
//     store.dispatch('updateTransitionName', 'slide-left')
//   }
//   push.call(that, location)
// }

// router.replace = (location) => {
//   store.dispatch('updateTransitionName', '')
//   replace.call(this, location)
// }

// router.back = (location) => {
//   store.dispatch('updateTransitionName', 'slide-right')
//   back.call(this, location)
// }

// router.forword = (location) => {
//   store.dispatch('updateTransitionName', 'slide-left')
//   forword.call(this, location)
// }
// Router.beforeEach(async (to, from, next) => {

// })

export default router