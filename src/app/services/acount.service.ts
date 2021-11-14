import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AcountService {

  constructor() { }
loggedIN = false;
login(user:User):boolean{

if(user.email=="seda" &&user.password=="12345"){

  this.loggedIN=true;
  localStorage.setItem("isLogged",user.email);
  return true;
}
return false;
}

isLoggedIn(){
  return this.loggedIN;
}
logOut(){
  localStorage.removeItem("isLogged");
  this.loggedIN=false;
}
}
