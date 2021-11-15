import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { AlertifyService } from '../services/alertify.service';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id: number;
  name:string;
  image:string;
  date:string;
  yorum:string;
  product: Product[];
  products: Product[];
   isClicked = false;
  constructor(private alertify:AlertifyService,  private activate: ActivatedRoute,private cardservice:CartItemService) { }

  ngOnInit() {
  /*  this.activate.params.subscribe(data=>{
      this.alertify.getproducts(data["id"]).subscribe(data=>{
        this.product=data;
      })
    });*/
    this.id = +this.activate.snapshot.paramMap.get('id');
    this.name = this.activate.snapshot.paramMap.get('name');
    this.image = this.activate.snapshot.paramMap.get('image');
    this.date = this.activate.snapshot.paramMap.get('date');
    this.yorum = this.activate.snapshot.paramMap.get('yorum');


  }
begenme(){

}
}

