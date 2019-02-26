import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000,
    withCredentials: true,
});

export class MatchdayAPI {

  static errorHandler(e) {
      console.error("AUTH API ERROR");
      console.error(e);
      throw e;
  }

  static currentUser(){
      return instance.get('/auth/currentuser')
      .then((res) => res.data.user)
      .catch(MatchdayAPI.errorHandler)
  }

  static login(email, password){
      return instance.post('/auth/login',{email, password})
      .then((res) => res.data)
      .catch(MatchdayAPI.errorHandler)
  }

  static signup(name, email, password){
      return instance.post('/auth/signup',{name, email, password})
      .then((res) => res.data.user)
      .catch(MatchdayAPI.errorHandler)

  }
  static logout(){
      return instance.get('/auth/logout')
      .then((res) => console.log("Logout"))
      .catch(MatchdayAPI.errorHandler)
  }
};