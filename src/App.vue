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
    console.log(state)
    if(user.t!='null' && !state.user.loggedIn){

      user.loginToken()
        .then(()=>{
          state.loaded = true;
          if(user.loggedIn){
            this.user = user;
            if(window.location.pathname=='/')
            this.$router.push('/')
          }

        }).catch((err)=>{
        console.log(err)
      })
    }else{
      state.loaded = true;
    }
    return state;
  },
  components:{
    'lph-nav': Nav
  }
}
</script>

<style>
  html, body{
    height:100%;
    margin:0;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;

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
