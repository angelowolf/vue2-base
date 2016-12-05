<script>
  export default {
    props: ['errors', 'nombre'],
    methods: {
      has (nombre) {
        let objeto = this.errors.find(function (error) {
          return error.name === nombre
        })
        if (objeto !== undefined) {
          this.msjError = objeto.mensaje
          return true
        } else {
          return false
        }
      }
    },
    data () {
      return {
        msjError: ''
      }
    }
  }
</script>
<template>
  <span class="text-danger" v-if="has(this.nombre)">
     {{msjError}}
  </span>
</template>