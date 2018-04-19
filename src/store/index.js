import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  navbar: null
}

const getters = {
}

const mutations = {
  updateNavbar (state, value) {
    state.navbar = value
  }
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations
})
