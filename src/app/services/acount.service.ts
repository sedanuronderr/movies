import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Register } from '../model/register';

import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AcountService {
 newUser:any=null;
  currentuser:Register;

  constructor(public afauth :AngularFireAuth,private router:Router) {

   }

   loggedIN = false;
   registerWithEmail(user){
      this.afauth.createUserWithEmailAndPassword(user.email,user.password).then(create=>{

        this.newUser=create
         console.log('success',this.newUser);
         this.router.navigate(['/login']);


      }).catch((error) => {
       console.log("error",error.message);
       this.router.navigate(['/register']);
      });


   }
   loginn(kullanici)
   {this.afauth.signInWithEmailAndPassword(kullanici.email,kullanici.password).then(userr=>{

    console.log("Başarılı Giriş", userr);
    this.router.navigate(['/cicek']);
    this.loggedIN=true;

   }).catch((error) => {
    console.log("Yanlış bilgi",error.message);
    this.router.navigate(['/login']);
   });

   }
   SignOut(){
    this.afauth.signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }





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
