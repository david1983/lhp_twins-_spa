<template>
  <div>
    <input type="email" v-model="user.email"/>
    <br>
    <input type="password" v-model="user.password"/>
    <br>
    <button class="btn" @click="login">Login</button>
  </div>
</template>

<script>
  import bus from "../../bus"
  import state from '../../state/app_state'

export default {
  name: 'login',
  data(){
    return state
  },
  methods: {
    login(){
      state.title="changed"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
