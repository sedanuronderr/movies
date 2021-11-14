import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AcountService {

  constructor() { }
loggedIN =false;
login(user:User):boolean{

if(user.userName=="seda"&&user.password=="12345"){

  return true;
  this.loggedIN=true;
  localStorage.setItem("isLogged",user.userName);
}
return false;
}

idLoggedIn(){
  return this.loggedIN;
}
logOut(){
  localStorage.removeItem("isLogged");
  this.loggedIN=false;
}
}
