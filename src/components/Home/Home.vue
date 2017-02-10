<template>
  <div class="home">
    <router-view v-if="user.loggedIn"></router-view>
    <div v-if="!user.loggedIn">
      <section>
        {{title}}
        <!--<div><img src="../assets/logo.png"/></div>-->
      </section>
      <section>
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
  import state from '../../state/app_state'

  export default {
    name: 'home',
    data () {
      return state
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
