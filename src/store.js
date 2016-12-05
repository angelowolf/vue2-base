import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './components/user/userStore'
import menuStore from './components/menu/menuStore'
import hijosStore from './components/hijos/hijosStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    userStore, menuStore, hijosStore
  },
  strict: debug
})
