import Vue from 'vue'
import { lang } from '@/stored'
import { STORE_KEY_CONFIG_LANG, MOBILE, DESKTOP, TABLET } from '@/constants'
import currentDevice from '@/utils/detect-device'
const state = {
  lang: lang,
  device: null,
  isMobile: null,
  isDesktop: null,
  isTablet: null
}

const mutations = {
  UPDATE(state, config) {
    state.lang = config.lang || state.lang
  },
  UPDATE_LANG(state, lang) {
    state.lang = lang || state.lang
  },
  DETECT_DEVICE(state, device) {
    state.device = device || state.device
    state.isMobile = state.device === MOBILE
    state.isDesktop = state.device === DESKTOP
    state.isTablet = state.device === TABLET
  }
}

const actions = {
  detectDevice({ commit }) {
    return new Promise(resolve => {
      Vue.config.device = currentDevice()
      commit('DETECT_DEVICE', Vue.config.device)
      resolve()
    })
  },
  doHidePreloader({ state }, isHiddenFooter) {
    if (isHiddenFooter) {
      gtCore.common.ElementUtil('footerLand', 1).hide()
    } else {
      gtCore.common.ElementUtil('footerLand', 1).show()
    }
    setTimeout(gtCore.common.ClassElementUtil('preloader', 'disapear').add, 300, setTimeout(gtCore.common.ElementUtil('preloader').remove, 1000))
  },
  changeLang({ commit }, lang) {
    Vue.config.lang = lang
    commit('UPDATE_LANG', lang)
    gtCore.storage.put(STORE_KEY_CONFIG_LANG, lang)
  },
  updateGlobalConfig({ commit, state }, config) {
    if (config.lang !== state.lang) {
      Vue.config.lang = config.lang
      gtCore.storage.put(STORE_KEY_CONFIG_LANG, config.lang)
    }
    commit('UPDATE', config)
    gtCore.storage.put(STORE_KEY_CONFIG_LANG, state.lang)
  }
}

const getters = {
  globalConfig(state) {
    return state
  },
  getCurrentDevice(state) {
    return state.device
  },
  getIsMobile(state) {
    return state.isMobile
  },
  getIsDesktop(state) {
    return state.isDesktop
  },
  getIsTablet(state) {
    return state.isTablet
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
