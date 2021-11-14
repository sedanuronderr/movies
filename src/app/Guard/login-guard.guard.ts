import { AcountService } from './../services/acount.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

constructor(private accountService:AcountService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,//gitmek istediği yer
    state: RouterStateSnapshot):boolean  {
    let logged = this.accountService.isLoggedIn();
     if(logged){
       return true;
     }
    this.router.navigate(["login"]);
    return false;
  }

}
