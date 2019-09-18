/**
 * App router config
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import store from '@/store'
import otherModuleRoutes from './module'
Vue.use(VueRouter)
Vue.use(VueMeta, {
  // The component option name that vue-meta looks for meta info on.
  keyName: 'page'
})

const routes = [
  ...otherModuleRoutes,
  {
    path: '*',
    component: resolve => import('@/view/NotFound.vue').then(resolve)
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { y: 0 }
    }
  },
  routes
})
router.beforeEach((to, from, next) => {
  store.dispatch('routes/changeRouteLoading', true).then(next)
})
router.afterEach(() => {
  store.dispatch('routes/changeRouteLoading', false)
})

export default router
