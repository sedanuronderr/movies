import { AcountService } from './../services/acount.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model :User = new User();
  email="";
  password="";
  constructor(private account:AcountService) { }

  ngOnInit() {}

  login(ngForm:NgForm){
    this.account.login(this.model);
  }
}
