import { RegisterComponent } from './register/register.component';
import { LoginGuardGuard } from './Guard/login-guard.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CicekComponent } from './cicek/cicek.component';
import { DetailComponent } from './detail/detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { SepetekleComponent } from './sepetekle/sepetekle.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cicek',
    pathMatch: 'full'
  },
  {path:'login',component:LoginComponent},
  {path:'cicek',component:CicekComponent},
  {path:'product-add-1',component: ProductAddComponent},
   {path:'app',component:AppComponent},
   {path:'detail/:name/:image/:date/:yorum/:link',component:DetailComponent,canActivate:[LoginGuardGuard]},
   {path:'sepet',component:SepetekleComponent,canActivate:[LoginGuardGuard]},
   {path:'cicek/:dataa',component:CicekComponent},
   {path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
