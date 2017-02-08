class User{

  constructor(){
    this.loggedIn = false;
  }

  login(email, pass){

  }

  logout() {
    this.loggedIn = false;
    this.profile = null;
  }

  register(user){

  }

  getProfile(){
    return this.profile;
  }

  setProfile(profile){
    this.profile = profile
  }

}
