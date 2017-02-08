<template>
  <div class="home">
    <section>
      <!--<div><img src="../assets/logo.png"/></div>-->
    </section>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>


export default {
  name: 'home',
  data () {
    return {
      title: "LPH - twins"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
