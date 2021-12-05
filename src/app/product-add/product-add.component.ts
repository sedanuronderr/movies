import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { AlertifyService } from '../services/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import * as firebase from 'firebase/compat';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import {  finalize } from "rxjs/operators";
declare let alertify:any;
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],

})
export class ProductAddComponent implements OnInit {
  productAddForm: any;

  constructor(private formBuilder: FormBuilder,private servis:AlertifyService,private firestore:AngularFirestore
    ,private toastr: ToastrService,private af:AngularFireStorage,private readonly sanitizer: DomSanitizer) { }
  model :Product = new Product();
  category:[];
  product:Product;
   @ViewChild('imageUrl' ) image_Url: { nativeElement: any; };
   userimagefile:File;
   fb;
  downloadURL: Observable<string>;
  urll:any;
   fruits: string[] = ['Korku', 'Komedi', 'Romantik','Bilim-Kurgu','Macera','Aksiyon'];
  ngOnInit() {

  }

/* submit(form:NgForm){
this.servis.addproduct(this.model).subscribe(data=>{
  this.servis.success(data.name  +"  başarıyla yüklendi");
});
 }*/

onFile(event){
  var n = Date.now();
const file =event.target.files[0];
const filePath = `RoomsImages/${n}`;
const fileRef = this.af.ref(filePath);
const task = this.af.upload(`RoomsImages/${n}`, file);
task
.snapshotChanges()
.pipe(
  finalize(() => {
    this.downloadURL = fileRef.getDownloadURL();
    this.downloadURL.subscribe(url => {
      if (url) {
        this.model.imageUrl = url;
      }
      console.log(this.fb);
    });
  })
).subscribe((url):any => {
  if (url) {
    console.log(url);

  }
});


}
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


