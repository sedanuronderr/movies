import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { FoodComponent } from '../food/food.component';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   currentPopover = null;
  constructor(private active:ActivatedRoute,private cardservice:CartItemService,public popoverController: PopoverController) { }
  totalItem !:0;
  public appPages = [
    { title: 'Film Ekle', url: '/product-add-1', icon: 'add' },
    { title: 'Favorites', url: '/sepet', icon: 'heart' },

  ];
  ngOnInit() {

  }

  async menu(ev) {
    const popover = await this.popoverController.create({
      component: FoodComponent,
      event: ev,

      backdropDismiss:true
    });


     await popover.present();
  }

}
