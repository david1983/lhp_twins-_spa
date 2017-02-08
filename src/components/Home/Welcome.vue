<template>
  <div>
    <a class="btn" href="/login">Login</a>
    <a class="btn" href="/register">Register</a>
  </div>
</template>

<script>
  import state from '../../state/app_state'

export default {
  name: 'welcome',
  data(){ return state}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
