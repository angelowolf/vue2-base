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
  <div id="notas-hijos">
    <p>las notas del hijos van aqui</p>
  </div>
</template>