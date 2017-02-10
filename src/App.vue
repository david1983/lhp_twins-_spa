<template>
  <div id="app">
    <lph-nav></lph-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import state from './state/app_state'
  import User from './services/user'
  import Nav from './components/Nav.vue'
export default {
  name: 'app',
  data(){
    var user = new User();
    if(user.t && !state.user.loggedIn){
      user.loginToken()
        .then(()=>{
          console.log(user)
          if(user.loggedIn){
            this.user = user;
            if(window.location.pathname=='/')
            this.$router.push('/')
          }
        })
    }
    return state;
  },
  components:{
    'lph-nav': Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.column{
  display:flex;
  flex-direction: column;
  max-width:600px;
  margin:auto
}

.row{
  display: flex;
  flex-direction: row;
}
  .row>div{
    padding:1em;
  }
</style>
