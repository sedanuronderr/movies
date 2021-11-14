import { Component } from '@angular/core';
import { AcountService } from './services/acount.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Film Ekle', url: '/product-add-1', icon: 'add' },
    { title: 'Favorites', url: '/sepet', icon: 'heart' },

  ];
  public labels = [{ title: 'Üyelik', url: '/login', icon: 'log-in'} ];
  constructor(private account:AcountService) {}

  isLoggIn(){
   return this.account.isLoggedIn();
  }
}
