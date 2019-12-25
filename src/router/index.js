import Vue from 'vue'
// import config from '../config'
import store from '@/store'
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
  }
]

export { routerMap }

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})

const { go, push, replace, back, forword } = router

router.go = (location) => {
  if (location > 0) {
    store.dispatch('updateTransitionName', 'slide-left')
  } else if (location < 0) {
    store.dispatch('updateTransitionName', 'slide-right')
  }
  go.call(this, location)
}

router.push = (location) => {
  if (location.back) {
    store.dispatch('updateTransitionName', 'slide-right')
  } else {
    store.dispatch('updateTransitionName', 'slide-left')
  }
  push.call(this, location)
}
router.replace = (location) => {
  store.dispatch('updateTransitionName', '')
  replace.call(this, location)
}
router.back = (location) => {
  store.dispatch('updateTransitionName', 'slide-right')
  back.call(this, location)
}
router.forword = (location) => {
  store.dispatch('updateTransitionName', 'slide-left')
  forword.call(this, location)
}
// Router.beforeEach(async (to, from, next) => {

// })

export default router