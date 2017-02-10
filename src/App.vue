<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import state from './state/app_state'
  import User from './services/user'
export default {
  name: 'app',
  data(){
    var user = new User();
    if(user.t){
      user.loginToken()
        .then(()=>{
          console.log(user)
          if(user.loggedIn){
            this.user = user;
            this.$router.push('/')
          }
        })
    }
    return state;
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

  .btn{

  }
</style>
