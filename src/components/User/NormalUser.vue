<template>
  <div>
    <h1>Normal User</h1>
    <input type="email" v-model="user.email"/>
    <input type="text" v-model="user.first_name" placeholder="name"/>
    <input type="text" v-model="user.last_name" placeholder="surname"/>
    <input type="text" v-model="user.address" placeholder="address"/>
    <input type="text" v-model="user.country" placeholder="country"/>
    <input type="text" v-model="user.town" placeholder="town"/>
    <input type="text" v-model="user.phone" placeholder="phone"/>
    <input type="date" v-model="user.dob" placeholder="date of birth"/>
    <button @click="edit()">Edit</button>
  </div>
</template>

<script>
  import state from '../../state/app_state'

export default {
  name: 'normal-user',
  data(){ return state;},
  methods: {
    edit(){
      state.user.save().then((r)=>{
        console.log(r)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
