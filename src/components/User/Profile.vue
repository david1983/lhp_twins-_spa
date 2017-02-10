<template>
  <div>
    <h1>User profile</h1>

    <div class="column">
      <div class="row"><div>Name:</div><div><input type="email" v-model="user.first_name" placeholder="name"/></div></div>
      <div class="row"><div>Surname:</div><div><input type="text" v-model="user.last_name" placeholder="surname"/></div></div>
      <div class="row"><div>Town:</div><div> <input type="text" v-model="user.town" placeholder="town"/></div></div>
      <div class="row"><div>Address:</div><div> <input type="text" v-model="user.address" placeholder="address"/></div></div>
      <div class="row"><div>Country:</div><div> <input type="text" v-model="user.country" placeholder="country"/></div></div>
      <div class="row"><div>Email:</div><div> <input type="text" v-model="user.email" placeholder="email"/></div></div>
      <div class="row"><div>Phone:</div><div> <input type="text" v-model="user.phone" placeholder="phone"/></div></div>
      <div class="row"><div>Birth date:</div><div> <datepicker v-model="user.dob" ></datepicker></div></div>
    </div>








    <button @click="edit()">Edit</button>
  </div>
</template>

<script>
  import state from '../../state/app_state'
  import Datepicker from 'vuejs-datepicker';


export default {
  name: 'Profile',
  data(){
    return state
  },
  methods: {
    edit(){
      state.user.save().then((r)=>{
        console.log(r)
      })
    }
  },
  components: {
    Datepicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row>div:first-child{
  min-width:200px;
  text-align: right;
}
</style>
