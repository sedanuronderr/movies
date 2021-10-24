import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Film Ekle', url: '/product-add-1', icon: 'add' },
    { title: 'Favorites', url: '/sepet', icon: 'heart' },
    { title: 'Üyelik', url: '/login', icon: 'log-in' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
