<script>
  import {mapState} from 'vuex'
  import FormError from './../FormError'

  export default {
    computed: {
      ...mapState({
        hijosStore: state => state.hijosStore
      }),
      tieneErrores () {
        return true
      }
    },
    components: {
      FormError
    },
    data () {
      return {
        errors: []
      }
    },
    methods: {
      subirDatos () {
        let error = [
        {name: 'nombre', mensaje: 'no vacio'}
        ]
        this.errors = error
      },
      has (nombre) {
        return this.errors.find(function (error) {
          return error.name === nombre
        })
      }
    }
  }
</script>
<template>
  <div id="datos-hijos">
    <form @click.prevent="subirDatos()" method="POST" autocomplete="off">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <div class="form-group" :class="{'has-error': has('nombre')}">
            <label class="control-label" for="nombre">Nombre *</label>
            <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre" maxlength="100" autocomplete="off" autofocus="autofocus">
            <form-error :errors="errors" :nombre="'nombre'"></form-error>
          </div>
          <div class="form-group" :class="{'has-error': has('documento')}">
            <label class="control-label" for="documento">Documento *</label>
            <input type="text" class="form-control numeric-nodot" id="documento" name="documento" placeholder="Documento" maxlength="10" autocomplete="off">
            <form-error :errors="errors" :nombre="'documento'"></form-error>
          </div>
          <div class="form-group" :class="{'has-error': has('telefono')}">
            <label class="control-label" for="telefono">Teléfono</label>
            <input type="tel" class="form-control numeric-nodot" id="telefono" name="telefono" placeholder="Teléfono" maxlength="100">
            <form-error :errors="errors" :nombre="'telefono'"></form-error>
          </div>
          <div class="form-group" :class="{'has-error': has('email2')}">
            <label class="control-label" for="email2">Email 2 *</label>
            <input type="email" class="form-control" id="email2" name="email2" placeholder="Segundo Email" maxlength="100" autocomplete="off">
            <form-error :errors="errors" :nombre="'email2'"></form-error>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="form-group" :class="{'has-error': has('apellido')}">
            <label class="control-label" for="apellido">Apellido *</label>
            <input type="text" class="form-control" id="apellido" name="apellido" placeholder="Apellido" maxlength="100" autocomplete="off">
            <form-error :errors="errors" :nombre="'apellido'"></form-error>
          </div>
          <div class="form-group" :class="{'has-error': has('fechaNacimiento')}">
            <label class="control-label" for="fechaNacimiento">Fecha de Nacimiento</label>
            <div class="input-group date">
                <input type="text" class="form-control" id="fechaNacimiento" name="fechaNacimiento" placeholder="Fecha de Nacimiento" maxlength="11" autocomplete="off">
                <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
            </div>
            <form-error :errors="errors" :nombre="'fechaNacimiento'"></form-error>
          </div>
          <div class="form-group" :class="{'has-error': has('email1')}">
            <label class="control-label" for="email1">Email 1 *</label>
            <input type="email" class="form-control" id="email1" name="email1" placeholder="Primer Email" maxlength="100" autocomplete="off">
            <form-error :errors="errors" :nombre="'email1'"></form-error>
          </div>
          <div class="form-group" :class="{'has-error': has('email3')}">
            <label class="control-label" for="email3">Email 3 *</label>
            <input type="email" class="form-control" id="email3" name="email3" placeholder="Tercer Email" maxlength="100" autocomplete="off">
            <form-error :errors="errors" :nombre="'email3'"></form-error>
          </div>  
        </div>  
        <div class="col-md-12">
          <button class="btn btn-success pull-right">Guardar</button>
        </div>
      </div>
    </form>
  </div>
</template>