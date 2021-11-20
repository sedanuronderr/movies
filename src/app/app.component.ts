import { Component } from '@angular/core';
import { AcountService } from './services/acount.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pro=[];
  public appPages = [
    { title: 'Film Ekle', url: '/product-add-1', icon: 'add' },
    { title: 'Favorites', url: '/sepet', icon: 'heart' },

  ];
  public labels = [{ title: 'Üyelik', url: '/login', icon: 'log-in'} ];
  constructor(private account:AcountService) {}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
 this.pro= this.account.newUser;
}
  isLoggIn(){
   return this.account.isLoggedIn();
  }

}
