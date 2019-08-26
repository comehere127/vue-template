import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import '@/assets/css/index.scss' // global css
import '@/assets/fonts/iconfont.css'
import '@/directive'
import { toBoolean } from '@/utils'
window.about = '__RELEASE__'
// Don't warn about using the dev version of Vue in development
Vue.config.productionTip = process.env.ENV !== 'development'
;((d, s, id) => {
  const fjs = d.getElementsByTagName(s)[0]

  const js = d.createElement(s)
  js.id = id
  js.src = '__GT_CORE__?ts=' + new Date().getTime()
  js.onload = () => {
    gtCore.init(
      {
        logger: {
          debug: toBoolean(gtCore.storage.get('dev') || '__DEBUG__')
        }
      },
      () => {
        // ui library
        require('./element-ui').default
        require('@/components/global')

        // router and store
        const store = require('@/store').default
        const router = require('@/router').default
        const { sync } = require('vuex-router-sync')
        sync(store, router)
        const detectPromise = store.dispatch('detectDevice')
        // hook(detectPromise)

        // main component
        const App = require('@/App').default
        detectPromise.then(() => {
          store.commit('UPDATE_GTCORE_STATUS', true)
          const app = new Vue({
            router,
            store,
            ...App
          })
          // Object spread copying everything from App.vue
          // actually mount to DOM
          app.$mount('app')
        })
      }
    )
  }
  fjs.parentNode.insertBefore(js, fjs)
})(document, 'script', 'gt-core')
