import { CartItemService } from '../services/cart-item.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AcountService } from '../services/acount.service';

@Component({
  selector: 'app-sepetekle',
  templateUrl: './sepetekle.component.html',
  styleUrls: ['./sepetekle.component.scss'],
  providers:[CartItemService]
})
export class SepetekleComponent implements OnInit {
    product:any=[];
    pro=[];
    veriler:string;
  constructor(private account:AcountService,private cardservice:CartItemService,private firestore:AngularFirestore,public afauth :AngularFireAuth) { }

  ngOnInit() {

   /* this.cardservice.getProducts().subscribe(data=>{
      this.product=data;
    });*/
    this.getAll();
  }
  removeItem(item){

    this.firestore.collection('favori').doc(item).delete();

    this.cardservice.removeCartItem(item);
  }




  getAll(){
    this.afauth.onAuthStateChanged
    ((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.veriler=this.account.veri
        this.firestore.collection('user').doc(this.veriler).collection('favorii').snapshotChanges().subscribe((response) => {
          this.pro =[];
             response.map(item =>{
              let a:any= item.payload.doc.data();
              a.id = item.payload.doc.id;
              this.pro.push(a);
            }
            );
          });

        // ...
      } else {
        // User is signed out
        // ...
      }
    });


    }/*
    this.firestore.collection('favori').snapshotChanges().subscribe((response) => {
      this.pro =[];
         response.map(item =>{
          let a:any= item.payload.doc.data();
          a.id = item.payload.doc.id;
          this.pro.push(a);
        }
        );
      });
*/
}

