
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],

})
export class ProductAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private servis:AlertifyService) { }
  model :Product = new Product();
  category:[];
   fruits: string[] = ['Korku', 'Komedi', 'Romantik','Bilim'];
  ngOnInit() {}

 submit(form:NgForm){
this.servis.addproduct(this.model).subscribe(data=>{
  this.servis.success(data.name  +"  başarıyla yüklendi");
});
 }

}
