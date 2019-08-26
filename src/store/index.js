import Vue from 'vue'
import Vuex from 'vuex'
import routeLoading from './modules/route'
import config from './modules/global-config'
import application from './modules/application'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  modules: {
    config,
    application,
    routeLoading
  }
})
window.info = store.getters
export default store
