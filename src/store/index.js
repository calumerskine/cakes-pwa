import Vue from 'vue'
import Vuex from 'vuex'
import cakes from './modules/cakes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cakes
  }
})
