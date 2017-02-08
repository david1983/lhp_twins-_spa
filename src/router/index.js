import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Login from '../components/Home/Login.vue'
import Welcome from '../components/Home/Welcome.vue'
import Register from '../components/Home/Register.vue'
import Home from '../components/Home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',component: Home,
      children:[
        {path:'', component: Welcome},
        {path:'login', component: Login},
        {path:'register', component: Register}
      ]},

  ]
})
