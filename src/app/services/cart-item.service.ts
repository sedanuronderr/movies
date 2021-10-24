import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare let alertify:any;
@Injectable({
  providedIn: 'root'
})
export class CartItemService {
public cartItemlist:any[]=[];
public productList= new BehaviorSubject<any>([]);
  constructor() { }

  success(message:string){
    alertify.success(message);
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

