<template>
  <div class="home">
    <section>
      {{title}}
      <!--<div><img src="../assets/logo.png"/></div>-->
    </section>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import bus from "../../bus"
  import state from '../../state/app_state'

  var h = {
    name: 'home',
    data () {
      return state
    }
  }


  export default h
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
