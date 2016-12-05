// import Vue from 'vue'
// import {hijosListUrl, getHeader} from './../../config'
const state = {
  hijosList: null,
  hijoSelect: null
}

const mutations = {
  SET_HIJOS_LIST (state, hijosList) {
    state.hijosList = hijosList
  },
  SET_HIJO_SELECT (state, hijoSelect) {
    state.hijoSelect = hijoSelect
  }
}

const actions = {
  // setHijosList: ({commit}, hijosList) => {
  //   return Vue.http.get(hijosListUrl, {headers: getHeader()})
  //     .then(response => {
  //       if(response.status === 200) {
  //         commit('SET_HIJOS_LIST', hijosList)
  //         return response.body.data
  //       }
  //     })
  // },
  setHijosList: ({commit}, hijosList) => {
    // todos los hijos que posee la persona logeada
    const hijosListDatos = [
      { nombre: 'Angelo', id: 2 }, { nombre: 'Florencia', id: 3 }
    ]
    commit('SET_HIJOS_LIST', hijosListDatos)
    return hijosListDatos
  },
  setHijoSelect: ({commit}, hijoSelect) => {
    commit('SET_HIJO_SELECT', hijoSelect)
  }
}

export default {
  state, mutations, actions
}
