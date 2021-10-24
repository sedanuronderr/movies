import { Category } from '../model/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

declare let alertify:any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
 public apis ="http://localhost:3000/products";
 public category="http://localhost:3000/category";
  products: Product[];
  categor:Category[];
  constructor(private http:HttpClient) { }

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
    return  this.http.get<Category[]>(this.category );

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
