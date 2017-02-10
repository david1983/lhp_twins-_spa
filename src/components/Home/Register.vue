<template>


  <div>
    <h1 v-if="success">Registration Completed</h1>
    <div v-if="!success">
      <input type="email" v-model="user.email"/>
      <br>
      <input type="password" v-model="user.password"/>
      <br>
      <button class="btn" @click="register">Register</button>
    </div>
  </div>
</template>

<script>
  import state from '../../state/app_state'
  import User from '../../services/user'
export default {
  name: 'register',
  data(){
    state.success = false;
    return state
  },
  methods: {
    register(){

      var user = new User(this.user.email, this.user.password)
      user.register()
        .then((r)=>{
          console.log(r)
        if(!r.data.insertId) return Promise.reject({err: r.data})
        this.success = true;
          this.$forceUpdate();
          console.log(this.success, this)

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
