import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicPipe } from './pipes/basic.pipe';
import { CategoryfiltPipe } from './pipes/categoryfilt.pipe';
import { CicekComponent } from './cicek/cicek.component';
import { DetailComponent } from './detail/detail.component';
import { FoodComponent } from './food/food.component';
import { HeaderComponent } from './header/header.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { SepetekleComponent } from './sepetekle/sepetekle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, BasicPipe, CategoryfiltPipe,CicekComponent,ProductAddComponent,
    DetailComponent,SepetekleComponent,HeaderComponent,FoodComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,BrowserAnimationsModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent,CicekComponent,SepetekleComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
