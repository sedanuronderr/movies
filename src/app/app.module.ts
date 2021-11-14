import { AcountService } from './services/acount.service';
import { LoginComponent } from './login/login.component';
import { initializeApp } from 'firebase/app';
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
import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { ToastrModule } from 'ngx-toastr';

import { AlertifyService } from './services/alertify.service';



@NgModule({
  declarations: [AppComponent, BasicPipe, CategoryfiltPipe,CicekComponent,ProductAddComponent,
    DetailComponent,SepetekleComponent,HeaderComponent,FoodComponent,LoginComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,BrowserAnimationsModule,FormsModule,HttpClientModule,ReactiveFormsModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireDatabaseModule,AngularFirestoreModule,
  ToastrModule.forRoot()  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AlertifyService,AcountService],
  bootstrap: [AppComponent,CicekComponent,SepetekleComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
