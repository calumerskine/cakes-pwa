import api from '@/api'
import router from '@/router'
import * as types from '../mutation-types'

const state = {
  cakes: [],
  selectedCake: null,
  error: null,
  loaders: {
    cakes: false,
    create: false
  }
}

const getters = {
  cakes: state => state.cakes,
  cakesLoader: state => state.loaders.cakes,
  selectedCake: state => state.selectedCake
}

const actions = {
  getCakes ({ commit }, cakes) {
    commit(types.GET_CAKES)
    api.getCakes(
      cakes => commit(types.GET_CAKES_SUCCESS, { cakes }),
      err => commit(types.GET_CAKES_FAILURE, { err })
    )
  },
  createCake ({ commit }, data) {
    commit(types.CREATE_CAKE)
    api.createCake(
      data,
      cake => commit(types.CREATE_CAKE_SUCCESS, { cake }),
      err => commit(types.CREATE_CAKE_FAILURE, { err })
    )
  },
  selectCake ({ commit }, cake) {
    commit(types.SELECT_CAKE, { cake })
  }
}

const mutations = {
  [types.GET_CAKES] (state) {
    state.loaders.cakes = true
    state.error = null
  },
  [types.GET_CAKES_SUCCESS] (state, { cakes }) {
    state.loaders.cakes = false
    state.error = null
    state.cakes = cakes
  },
  [types.GET_CAKES_FAILURE] (state, { err }) {
    state.loaders.cakes = false
    state.error = err
  },
  [types.CREATE_CAKE] (state) {
    state.loaders.create = true
    state.error = null
  },
  [types.CREATE_CAKE_SUCCESS] (state, { cake }) {
    state.loaders.create = false
    state.error = null
    state.cakes.push(cake)
    router.push('/')
  },
  [types.CREATE_CAKE_FAILURE] (state, { err }) {
    state.loaders.create = false
    state.error = err
  },
  [types.SELECT_CAKE] (state, { cake }) {
    state.selectedCake = cake
    router.push(`/${cake.id}`)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
