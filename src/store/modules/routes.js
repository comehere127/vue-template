const state = {
  loading: false
}

const mutations = {
  CHANGE: (state, status) => {
    state.loading = !!status
  }
}

const actions = {
  changeRouteLoading({ commit }, status) {
    commit('CHANGE', status)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
