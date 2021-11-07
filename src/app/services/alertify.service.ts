import { Category } from '../model/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { AngularFirestore } from '@angular/fire/compat/firestore';

declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
 public apis ="http://localhost:3000/products";
 public category="https://raw.githubusercontent.com/SedaNur35/Category/main/category.json";
  products: Observable<Product[]> ;
  product:Product;
  constructor(private http:HttpClient,private firestore:AngularFirestore) {

   }



   getFirestore(){

   return   this.firestore
    .collection("film")
    .snapshotChanges();
  }




  success(message:string){
    alertify.success(message);
  }

  getproducts(data):Observable<Product[]>{

    let newPath = this.apis;
    if(data){
        newPath+= "?cId="+ data;

    }

  return  this.http.get<Product[]>(newPath);

  }
  getcategory(data):Observable<Category[]>{
    return  this.http.get<Category[]>(this.category);

    }

  addproduct(product:Product):Observable<Product>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.post<Product>(this.apis,product,httpOptions);

  }


}
