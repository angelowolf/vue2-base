<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        userStore: state => state.userStore,
        menuStore: state => state.menuStore,
        hijosStore: state => state.hijosStore
      })
    },
    methods: {
      salir () {
        this.$store.dispatch('clearAuthUser')
        window.localStorage.removeItem('authUser')
        this.$router.push({name: 'home'})
      },
      isMenuSelected (nombreMenu) {
        if (this.menuStore.menuActual === nombreMenu) {
          return true
        } else {
          return false
        }
      },
      cambiarHijo (hijoSeleccionado) {
        this.$store.dispatch('setHijoSelect', hijoSeleccionado)
      }
    },
    created () {
      this.$store.dispatch('setHijosList')
    }
  }
</script>
<template>
  <nav class="navbar navbar-default" v-if="userStore.authUser !== null && userStore.authUser.access_token">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Home</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li :class="{active: isMenuSelected('dashboard')}"><router-link :to="{name: 'dashboard'}">Dashboard</router-link></li>
        <li :class="{active: isMenuSelected('chat')}"><router-link :to="{name: 'chat'}">Chat</router-link></li>
        <li class="dropdown" :class="{active: isMenuSelected('hijos')}">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hijos <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li @click="cambiarHijo(hijo)"
            v-for="hijo in hijosStore.hijosList">
              <a>
                <router-link :to="{name: 'hijos'}">{{hijo.nombre}}</router-link>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Perfil <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Mis Datos</a></li>
            <li role="separator" class="divider"></li>
            <li><a @click="salir()">Cerrar Sesion</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
