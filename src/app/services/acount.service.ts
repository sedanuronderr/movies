import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Register } from '../model/register';

import { User } from '../model/User';

@Injectable()
export class AcountService {
 newUser:any=null;
  currentuser:Register;
   cred:any;
   veri:string;
  constructor(public afauth :AngularFireAuth,private router:Router,private firestore:AngularFirestore,private toaster:ToastrService) {

   }

   loggedIN = false;
   registerWithEmail(user){
      this.afauth.createUserWithEmailAndPassword(user.email,user.password).then(create=>{
           this.firestore.collection('users').doc(create.user.uid).set({
             email: user.email,
             password:user.password,
             kullanici:user.kullanici,
             id: create.user.uid
           })

          this.newUser=create;
         console.log('success',this.newUser);
         this.toaster.success('Kayıt Başarılı')
         this.router.navigate(['/login']);


      }).catch((error) => {
       console.log("error",error.message);
       this.router.navigate(['/register']);
      });


   }
   loginn(kullanici)
   {this.afauth.signInWithEmailAndPassword(kullanici.email,kullanici.password).then(userr=>{

    console.log("Başarılı Giriş", userr.user.uid);
    this.firestore.collection('user').doc(userr.user.uid).set({
      id: userr.user.uid
    });
    this.veri=userr.user.uid;
    this.toaster.success('Giriş Yapıldı')
    this.router.navigate(['/cicek']);
    this.loggedIN=true;

   }).catch((error) => {
    console.log("Yanlış bilgi",error.message);
    this.toaster.error('Yanlış Bilgi Girdiniz..Tekrar Deneyiniz')
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
