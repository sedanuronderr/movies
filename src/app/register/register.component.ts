import { AcountService } from './../services/acount.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Register } from '../model/register';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  model :Register = new Register();
  email="";
  password="";
  errorMessage="";
  error :{name:string,message:string

  }={name: '',message:''}

  constructor(private auth:AcountService,private router:Router,private toastr: ToastrService) { }

  ngOnInit() {}

  register(form:NgForm){
    let data =form.value;

    this.auth.registerWithEmail(data);
    this.toastr.success("Başarıyla Kayıt Oldu","Kullanıcı");
   console.log(data);

  }

}
