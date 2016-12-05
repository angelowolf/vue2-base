<script>
  import {mapState} from 'vuex'
  import HijosDatos from './../components/hijos/HijosDatos'
  import HijosGlobal from './../components/hijos/HijosGlobal'
  import HijosNotas from './../components/hijos/HijosNotas'

  export default {
    computed: {
      ...mapState({
        menuStore: state => state.menuStore
      })
    },
    components: {
      HijosDatos, HijosGlobal, HijosNotas
    },
    methods: {
      seleccionarSubMenu (subMenu) {
        this.subMenu = subMenu
        this.$store.dispatch('setSubMenuHijo', subMenu)
      },
      isMenuSelected (nombreMenu) {
        if (this.menuStore.subMenuHijo === nombreMenu) {
          return true
        } else {
          return false
        }
      }
    },
    created () {
      let menuSelect = window.localStorage.getItem('subMenuHijo')
      this.$store.dispatch('setSubMenuHijo', menuSelect)
    }
  }
</script>
<template>
  <div class="wrapper" id="hijos-wrapper">
    <section class="content">
      <div class="col-md-2" id="hijos-list">
        <ul class="list-group">
          <li class="list-group-item" :class="{active: isMenuSelected('datos')}" @click="seleccionarSubMenu('datos')">datos</li>
          <li class="list-group-item" :class="{active: isMenuSelected('notas')}" @click="seleccionarSubMenu('notas')">notas</li>
          <li class="list-group-item" :class="{active: isMenuSelected('global')}" @click="seleccionarSubMenu('global')">global</li>
        </ul>
      </div>
      <div class="col-md-10" id="hijo-datos">
        <hijos-datos v-if="menuStore.subMenuHijo === 'datos'"></hijos-datos>
        <hijos-notas v-if="menuStore.subMenuHijo === 'notas'"></hijos-notas>
        <hijos-global v-if="menuStore.subMenuHijo === 'global'"></hijos-global>
      </div>
    </section>  
  </div>
</template>
<style>
  .list-group li {
    cursor: pointer;
  }
</style>