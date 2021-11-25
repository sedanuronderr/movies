import { AcountService } from './acount.service';
import { User } from './../model/User';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
declare let alertify:any;
@Injectable()
export class CartItemService {
public cartItemlist=[];
 veriler:string;
public productList= new BehaviorSubject<any>([]);
  constructor(private firestore:AngularFirestore,public afauth :AngularFireAuth,private account:AcountService) {


   }

  success(message:string){
    alertify.success(message);
  }

   cartAdd(data){
     console.log(data);
    this.veriler=this.account.veri
    this.firestore.collection('user').doc(this.veriler).collection('favorii').add(data);


   }

  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItemlist.push(...product);
    this.productList.next(product);
  }
  addtoCart(product:any){
    this.cartItemlist.push(product);
    this.productList.next(this.cartItemlist);
      console.log(this.cartItemlist);

  }
  removeCartItem(product:any){
    this.cartItemlist.map((a:any,index:any)=>{
      if(product.id=== a.id){
        this.cartItemlist.splice(index,1);
      }
    })
  }
}

