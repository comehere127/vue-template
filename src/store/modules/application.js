import Vue from 'vue'
import { getApplicationList } from '@/api/application'
import { ERROR_CODE, STORE_KEY_USER_DEMAND } from '@/constants'
import { map } from 'lodash'
const BuildDataAction = data => {
  return map(data, item => ({
    appId: item.appID,
    appName: item.shopfrontName,
    highlights: item.highlightConfig,
    imageItem: item.images.banner1,
    imageBanner: item.images.banner2,
    platform: item.platform,
    payUrl: item.payUrl,
    point: item.point
  }))
}
const state = {
  applicationData: false,
  userDemand: false
}
const mutations = {
  // set user info
  SET_APPLICATION_LIST(state, appList) {
    state.applicationData = appList
  },
  GET_USER_DEMAND(state) {
    var userDemandStored = gtCore.storage.get(STORE_KEY_USER_DEMAND)
    state.userDemand = userDemandStored === null ? false : userDemandStored
  },
  SET_USER_DEMAND(state, { appId, callback }) {
    try {
      let userDemand = {}
      if (state.userDemand === false) {
        userDemand[appId] = 1
      } else {
        userDemand = state.userDemand
        userDemand[appId] = (userDemand[appId] >> 0) + 1
      }
      gtCore.storage.put(STORE_KEY_USER_DEMAND, userDemand)
    } catch (ex) {
      gtCore.logger.warn(ex)
    }
    callback()
  }
}
const actions = {
  // init application info
  reqApplicationList({ commit }) {
    return new Promise((resolve, reject) => {
      getApplicationList()
        .then(data => {
          if (data.returnCode === ERROR_CODE.SUCCESS) {
            commit('SET_APPLICATION_LIST', BuildDataAction(data.data))
          } else {
            Vue.prototype.$message.error(`${data.returnCode} - ${data.returnMessage}`)
          }
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  setUserDemand({ commit }, payload) {
    commit('SET_USER_DEMAND', {
      appId: payload.appId,
      callback: () => {
        gtCore.request.redirectTo(payload.redirectUrl)
      }
    })
  },
  getUserDemandStored({ commit }) {
    return new Promise(resolve => {
      commit('GET_USER_DEMAND')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
