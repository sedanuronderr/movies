import { CartItemService } from '../services/cart-item.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-sepetekle',
  templateUrl: './sepetekle.component.html',
  styleUrls: ['./sepetekle.component.scss'],
})
export class SepetekleComponent implements OnInit {
    product:any=[];
  constructor(private cardservice:CartItemService) { }

  ngOnInit() {

    this.cardservice.getProducts().subscribe(data=>{
      this.product=data;
    });
  }
  removeItem(item:any){
    this.cardservice.removeCartItem(item);
  }


}

