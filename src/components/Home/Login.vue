<template>
  <div>
    <h1>{{user.name}}</h1>

    <input type="email" v-model="user.email"/>
    <br>
    <input type="password" v-model="user.password"/>
    <br>
    <button class="btn" @click="login">Login</button>
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
        state.user = {loggedIn: true, name: 'dave', role: 0}
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
