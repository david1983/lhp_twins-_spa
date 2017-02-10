import state from '../state/app_state'
import axios from 'axios';
import Cookies from 'cookies-js'

class User{

  constructor(email, pass){
    this.loggedIn = false;
    if(email && pass){
      this.email = email;
      this.password = pass
    }
    this.t = Cookies.get("t");
    if(this.t) axios.defaults.headers.common['Authorization'] = this.t;
  }

  login(){
    let postData = { email: this.email, password: this.password}

    return axios.post(state.config.api.url + '/api/user/login', postData)
      .then((r)=> {
        if (!r.data.token) return Promise.reject('Incorrect email or password')
        return Promise.resolve(r.data.token)
      }).then((token)=>{
        this.t = token;
        Cookies.set("t", token)
        return this.loginToken()
      })
  }

  loginToken(){
    console.log(this.t)
    if(!this.t) return Promise.reject("no token specified")
    axios.defaults.headers.common['Authorization'] = this.t;
    return axios.get(state.config.api.url +'/api/user/profile')
      .then((userData)=>{
        if(userData.data.error) return Promise.reject({err: userData.data.error})
        delete userData.data.password;
        Object.assign(this, userData.data)
        this.loggedIn = true;
        return Promise.resolve();
    })
  }

  logout() {
    var t = Cookies.get("t")
    console.log(t)
    Cookies.set("t", null)
    t = Cookies.get("t")
    console.log(t)
    this.loggedIn = false;
    this.profile = null;

  }

  register(){
    if(!this.email || !this.password) return Promise.reject('no email or password provided')
    let postData = { email: this.email, password: this.password}

    return axios.post(state.config.api.url + '/api/user/register', postData)

  }

  save(){
    if(!this.loggedIn) return Promise.reject("not logged in")
    if(!this.id) return Promise.reject("no id in user")
    return axios.post(state.config.api.url + '/api/user/' + this.id, this)
  }

}


export default User
