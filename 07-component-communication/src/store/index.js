import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDarkModeActivated: false,
    user: {
      name: 'Jefry Dewangga'
    }
  },
  mutations: {
    TOGGLE_DARK_MODE(state) {
      state.isDarkModeActivated = !state.isDarkModeActivated
    }
  },
  actions: {
  },
  modules: {
  }
})
