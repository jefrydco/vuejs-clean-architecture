import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'https://www.youtube.com/watch?v=klnvttPfOUM',
    resultList: [],
    pagination: {
      first: undefined,
      last: undefined,
      prev: undefined,
      next: undefined,
      total: 0,
      page: 0
    },
    currentResultStart: undefined
  },
  mutations: {
    SET_URL(state, { url }) {
      state.url = url
    },
    SET_RESULT_LIST(state, { resultList }) {
      state.resultList = resultList
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = pagination
    },
    RESET_PAGINATION(state) {
      state.pagination = {
        first: undefined,
        last: undefined,
        prev: undefined,
        next: undefined,
        total: 0,
        page: 0
      }
    },
    SET_CURRENT_RESULT_START(state, { currentResultStart }) {
      state.currentResultStart = currentResultStart
    }
  }
})
