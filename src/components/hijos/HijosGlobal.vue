<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        hijosStore: state => state.hijosStore
      })
    }
  }
</script>
<template>
  <div id="global-hijos">
    <p>los datos globales del hijos van aqui</p>
  </div>
</template>