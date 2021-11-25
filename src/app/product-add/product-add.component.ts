import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { AlertifyService } from '../services/alertify.service';
import { ToastrService } from 'ngx-toastr';
declare let alertify:any;
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],

})
export class ProductAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private servis:AlertifyService,private firestore:AngularFirestore,private toastr: ToastrService) { }
  model :Product = new Product();
  category:[];
  product:Product;
   fruits: string[] = ['Korku', 'Komedi', 'Romantik','Bilim-Kurgu','Macera','Aksiyon'];
  ngOnInit() {

  }

/* submit(form:NgForm){
this.servis.addproduct(this.model).subscribe(data=>{
  this.servis.success(data.name  +"  başarıyla yüklendi");
});
 }*/


success(message:string){
  alertify.success(message);
}

 submit(form:NgForm){
let data =form.value;
this.firestore.collection("film").add(data);
this.toastr.success("Başarıyla Yüklendi","Film");
form.resetForm();
 }


}
