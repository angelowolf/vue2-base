<script>
  import {loginUrl, getHeader} from './../config'
  import {mapState} from 'vuex'

  export default{
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    },
    data () {
      return {
        login: {
          usuario: 'admin',
          clave: 'admin'
        }
      }
    },
    methods: {
      loginForm () {
        const postData = {
          usuario: this.login.clave,
          clave: this.login.usuario
        }
        // console.log(loginUrl)
        // console.log(getHeader)
        // console.log(userUrl)
        // console.log(postData)
        // datos de la persona que logea
        // const authUser = {}
        // authUser.access_token = 'token maigo'
        // authUser.usuario = 'annaldar'
        // authUser.name = 'angelo wolf'
        // window.localStorage.setItem('authUser', JSON.stringify(authUser))
        // navego al home
        // this.$store.dispatch('setUserObject', authUser)
        // this.$router.push({name: 'dashboard'})
        const authUser = {}
        this.$http.post(loginUrl, postData, {headers: getHeader()})
          .then(response => {
            if (response.status === 200) {
              console.log(response.data)
              authUser.access_token = response.data.access_token
              window.localStorage.setItem('authUser', JSON.stringify(authUser))
              // this.$http.get(userUrl, {headers: getHeader()})
              //   .then(response => {
              //     authUser.usuario = response.body.usuario
              //     authUser.name = response.body.name
              //     window.localStorage.setItem('authUser', JSON.stringify(authUser))
              this.$store.dispatch('setUserObject', authUser)
              this.$router.push({name: 'dashboard'})
              //   })
            }
          })
      }
    }
  }
</script>
<template>
  <div class="wrapper" id="login-wrapper">
    <section class="login">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="panel-body">
                <form @submit.prevent="loginForm()">
                  <div class="form-group">
                    <label>Usuario</label>
                    <input type="text" class="form-control" placeholder="Ingresa tu usuario" v-model="login.usuario">
                  </div>
                  <div class="form-group">
                    <label>Clave</label>
                    <input type="password" class="form-control" placeholder="Ingresa tu clave" v-model="login.clave">
                  </div>
                  <button class="btn btn-primary">Ingresar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>   
</template>
<style>
  #login-wrapper{
    margin-top: 50px; 
  }
</style>
