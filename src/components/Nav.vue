<template>
  <nav v-if="user.loggedIn">
    <a href="#" @click="logout()">Logout</a>
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
      state.user.logout()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
