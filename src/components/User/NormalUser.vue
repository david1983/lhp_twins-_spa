<template>
  <div>
    <h1>{{user.first_name}} {{user.last_name}}</h1>

    <div class="column">
      <div class="row"><div>Name:</div><div>{{user.first_name}}</div></div>
      <div class="row"><div>Surname:</div><div>{{user.last_name}}</div></div>
      <div class="row"><div>Town:</div><div>{{user.town}}</div></div>
      <div class="row"><div>Address:</div><div>{{user.address}}</div></div>
      <div class="row"><div>Country:</div><div>{{user.country}}</div></div>
      <div class="row"><div>Email:</div><div>{{user.email}}</div></div>
      <div class="row"><div>Phone:</div><div>{{user.phone}}</div></div>
      <div class="row"><div>Birth date:</div><div>{{user.dob }}</div></div>
    </div>
    <br>
    <div>
      <router-link to="/profile">Edit profile</router-link>
    </div>
  </div>
</template>

<script>
  import state from '../../state/app_state'

export default {
  name: 'normal-user',
  data(){ return state;},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
