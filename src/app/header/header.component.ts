import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private active:ActivatedRoute,private cardservice:CartItemService) { }
  totalItem !:0;
  ngOnInit() {
    this.cardservice.getProducts().subscribe(resp=>{
      this.totalItem=resp.length;
   });
  }

}
