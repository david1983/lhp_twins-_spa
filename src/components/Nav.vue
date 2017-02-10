<template>
  <nav v-if="user.loggedIn" class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/logo.png"/>
        </router-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="logout()">Logout</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div>

  </nav>
</template>

<script>
  import state from '../state/app_state'
export default {
  name: 'nav',
  data(){
    return state;
  },
  methods:{
    logout(){
      console.log(state.user)
      state.user.logout();
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-brand img{
    height:100%;
  }
</style>
