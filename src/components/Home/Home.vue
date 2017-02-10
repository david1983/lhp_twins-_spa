<template>
  <div class="home">
    <router-view v-if="user.loggedIn && loaded"></router-view>
    <div v-if="!user.loggedIn && loaded" class="wrap">
      <section>
        <div>
          <img src="../../assets/logo.png"/>
        </div>

        <h1>London Psychiatric Hospital</h1>
        <h3>Twins project</h3>
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

  .wrap{
    background: rgba(212,245,255,1);
    background: -moz-linear-gradient(top, rgba(212,245,255,1) 0%, rgba(255,255,255,1) 51%, rgba(227,243,255,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(212,245,255,1)), color-stop(51%, rgba(255,255,255,1)), color-stop(100%, rgba(227,243,255,1)));
    background: -webkit-linear-gradient(top, rgba(212,245,255,1) 0%, rgba(255,255,255,1) 51%, rgba(227,243,255,1) 100%);
    background: -o-linear-gradient(top, rgba(212,245,255,1) 0%, rgba(255,255,255,1) 51%, rgba(227,243,255,1) 100%);
    background: -ms-linear-gradient(top, rgba(212,245,255,1) 0%, rgba(255,255,255,1) 51%, rgba(227,243,255,1) 100%);
    background: linear-gradient(to bottom, rgba(212,245,255,1) 0%, rgba(255,255,255,1) 51%, rgba(227,243,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4f5ff', endColorstr='#e3f3ff', GradientType=0 );
  }

  .home{
    height:100%;
  }
  .wrap{
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

  }
section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:50%;
}
</style>
