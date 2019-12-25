import Vue from 'vue'
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
    component: resolve => require(['@/views/home'])
  }
]

// Router.beforeEach(async (to, from, next) => {

// })

export default routerMap