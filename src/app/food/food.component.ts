import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AcountService } from '../services/acount.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {

  constructor(private account:AcountService,private toastr: ToastrService) { }
  public appPages = [
    { title: 'Film Ekle', url: '/product-add-1', icon: 'add' },
    { title: 'Favorites', url: '/sepet', icon: 'heart' },

  ];
  public labels = [{ title: 'Üyelik', url: '/login', icon: 'log-in'},
  {title: 'Çıkış', url: '/cicek', icon: 'log-in'},
 ];

  ngOnInit() {}
  isLoggIn(){
    return this.account.isLoggedIn();
   }

   logout(){
     this.account.logOut();
     this.toastr.success("Güvenli çıkış yapıldı", "");
   }
}
