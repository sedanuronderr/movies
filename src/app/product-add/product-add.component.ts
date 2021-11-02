import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { AlertifyService } from '../services/alertify.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],

})
export class ProductAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private servis:AlertifyService,private firestore:AngularFirestore,private toastr: ToastrService) { }
  model :Product = new Product();
  category:[];
   fruits: string[] = ['Korku', 'Komedi', 'Romantik','Bilim'];
  ngOnInit() {

  }

/* submit(form:NgForm){
this.servis.addproduct(this.model).subscribe(data=>{
  this.servis.success(data.name  +"  başarıyla yüklendi");
});
 }*/
resetForm(form?:NgForm){
  form.resetForm();
  this.servis.products ={
    id: null,
    cId:'',
    name:'',
    imageUrl:'',
    yorum:'',
    date:'',

  }
}

 submit(form:NgForm){
let data =form.value;
this.firestore.collection("film").add(data);
this.resetForm(form);
this.toastr.success("Başarıyla Eklendi");
 }

}
