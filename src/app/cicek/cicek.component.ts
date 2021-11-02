import { Category } from '../model/category';
import { CartItemService } from './../services/cart-item.service';

import { AlertifyService } from './../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input  } from '@angular/core';
import { Product } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-cicek',
  templateUrl: './cicek.component.html',
  styleUrls: ['./cicek.component.scss'],
  animations:[
    trigger('heart', [
      state('unliked', style({
          color: '#fff',
          opacity: '0.5',
          transform: 'scale(1)'
      })),
      state('liked', style({
          color: '#e74c3c',
          opacity: '1',
          transform: 'scale(1.1)'
      })),
      transition('unliked <=> liked', animate('100ms ease-out'))
  ])
  ]
})
export class CicekComponent implements OnInit {





  constructor(private api:HttpClient,private alertify:AlertifyService ,private  router: Router,private active:ActivatedRoute,private cardservice:CartItemService) { }
  title="Ürün Listesi";
  filterText= "";
  totalItem !:0;
  category:Category[];
   products :Product[];
  pro:Product[];
  public likeState: string = 'liked';

  public iconName: string = 'heart';
  sliderConfig={
     spaceBetween:6,

     slidesPerView:2

  }
  ngOnInit() {
    this.active.params.subscribe(data=>{
      this.alertify.getproducts(data["id"]).subscribe(data=>{
        this.products=data;
      })
    });

     this.cardservice.getProducts().subscribe(resp=>{
        this.totalItem=resp.length;
     });


     this.active.params.subscribe(data=>{
      this.alertify.getcategory(data["id"]).subscribe(data=>{
        this.category=data;
      })
    });

  }

goToDetailPage(name:string,image:string,date:string,yorum:string){
  this.router.navigate(['detail',name,image,date,yorum]);
}
toggleLikeState(item){
 this.products.map((items)=>{
  if(item === items ){



    this.cardservice.addtoCart(item);
  }

 })




 /* if(this.likeState ==='unliked' ){

    this.likeState = 'liked';
    this.iconName = 'heart';


    this.cardservice.addtoCart(item);

  }  else {
    this.likeState = 'unliked';
    this.iconName = 'heart-outline';

  }*/


}
}


