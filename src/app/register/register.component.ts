import { AcountService } from './../services/acount.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Register } from '../model/register';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  model :Register = new Register();
  email="";
  password="";
  kullanici="";
  errorMessage="";
  error :{name:string,message:string

  }={name: '',message:''}

  constructor(private auth:AcountService,private router:Router,
    private toastr: ToastrService,private firestore:AngularFirestore,private database:AngularFireDatabase) { }

  ngOnInit() {}

  register(form:NgForm){
    let data =form.value;

    this.auth.registerWithEmail(data);


  }

}
