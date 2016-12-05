import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from './store'

import App from './App'

import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import ChatPage from './pages/ChatPage'
import HijosPage from './pages/HijosPage'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component('app', App)

const routes = [
  {path: '/', component: LoginPage, name: 'home'},
  // cada ruta que tiene q estar logeada se le pone el meta
  {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: {requiresAuth: true}},
  {path: '/chat', component: ChatPage, name: 'chat', meta: {requiresAuth: true}},
  {path: '/hijos', component: HijosPage, name: 'hijos', meta: {requiresAuth: true}}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    console.log(to.name)
    console.log(from.name)
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      // const menu = {}
      // menu.actual = to.name
      // console.log(menu)
      // window.localStorage.setItem('menu', JSON.stringify(menu))
      router.app.$store.dispatch('setMenuActual', to.name)
      next()
    } else {
      next({name: 'home'})
    }
  }
  next()
})

new Vue({
  router, store
}).$mount('#app')
