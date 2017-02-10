import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Home/Login.vue'
import Welcome from '../components/Home/Welcome.vue'
import Register from '../components/Home/Register.vue'
import Home from '../components/Home/Home.vue'
import AdminUser from '../components/User/AdminUser.vue'
import NormalUser from '../components/User/NormalUser.vue'
import Profile from '../components/User/Profile.vue'
import state from '../state/app_state'

Vue.use(Router)


//Home route if user is not logged in
var homeRoute = {path: '/',component: Home,
  children:[
    {path:'', component: Welcome},
    {path:'login', component: Login},
    {path:'register', component: Register}
  ]}

export default new Router({
  mode: 'history',
  routes: [
    homeRoute,
    {path: 'profile', component: Profile}
  ]
})
