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


export default {
  name: 'login',
  data(){
    return {
      user:{}
    }
  },
  methods: {
    login(){
      console.log(this.user.email, this.user.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
