<template>
  <div>
    <div v-if="!user.loggedIn">
      <router-link class="btn" to="/login">Login</router-link>
      <router-link class="btn" to="/register">Register</router-link>
    </div>
    <div v-if="user.loggedIn">
      <admin-user v-if="user.role==1"></admin-user>
      <normal-user v-if="user.role!=1"></normal-user>
    </div>
  </div>
</template>

<script>
  import state from '../../state/app_state'
  import AdminUser from '../User/AdminUser.vue'
  import NormalUser from '../User/NormalUser.vue'

export default {
  name: 'welcome',
  data(){ return state},
  components: {
    "admin-user" : AdminUser, "normal-user" : NormalUser
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
