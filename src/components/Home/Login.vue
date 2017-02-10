<template>
  <div>
    <h1>Login</h1>
    <br>
    <input type="email" v-model="user.email" placeholder="email"/>
    <br>
    <input type="password" v-model="user.password" placeholder="password"/>
    <br><br>
    <button class="btn" @click="login">Login</button><br><br>
    <router-link to="/">go back</router-link>
  </div>
</template>

<script>
  import state from '../../state/app_state'
  import User from '../../services/user'

export default {
  name: 'login',
  data(){
    return state
  },
  methods: {
    login(){
      let myUser = new User(this.user.email, this.user.password)
      myUser.login().then((r)=>{
        state.user = myUser;
        this.$router.push('/')
      }).catch((e)=>{
        console.log(e)
        this.error = e;
      })


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
