<template>
  <div>
    <input type="email" v-model="user.email"/>
    <br>
    <input type="password" v-model="user.password"/>
    <br>
    <button class="btn" @click="register">Register</button>
  </div>
</template>

<script>
  import state from '../../state/app_state'

export default {
  name: 'register',
  data(){
    return state
  },
  methods: {
    register(){
      console.log(this.user.email, this.user.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
