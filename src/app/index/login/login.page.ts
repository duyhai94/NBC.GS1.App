import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStoregeService } from 'src/app/service/localstorege.service';
import { FormToast, invalidForm } from 'src/app/utils/pipes/valid.forms';

const data = {
  Email : 'test@ci.com',
  Password : '123456'
}
const token ={
   token: '123456'
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formToast = FormToast;
  showPass =  true;
  showDelete = false;
  checkLogin : boolean;
  formLogin = new FormGroup({
    Email: new FormControl("",[Validators.required,invalidForm(/\S+@\S+\.\S+/, 'Email')]),
    Password: new FormControl("",[Validators.required]),
  })
  constructor(
    private router: Router,
    private local: LocalStoregeService

  ) { }

  ngOnInit() {
  }

  onRegister(){
    this.router.navigateByUrl('index/register');
  }
  onForgot(){
    this.router.navigateByUrl('index/forgot')
  }
  btnTogglePassword(){
    this.showPass = !this.showPass;
  }
  btnLogin() {
    
    if (this.formLogin.invalid ) {
      this.formLogin.markAllAsTouched();
      return;
    }
    console.log(this.formLogin.value);
    const _e = this.formLogin.get("Email").value;
    const _p = this.formLogin.get("Password").value;


    if(_e == data.Email && _p == data.Password){
      this.checkLogin = true;
      this.formLogin.reset();
      this.local.set('token',token);
      this.router.navigateByUrl('main')
      

    } else {
        this.checkLogin = false;
    }
  }
  onDelete(){
      this.formLogin.get('Email').reset();
      this.showDelete = false;
  }
  onKeyup(){
    const _e = this.formLogin.get('Email').value;
    if(_e.trim().length > 0){
      this.showDelete = true;
    } else{
      this.showDelete = false;

    }

  }

     // check valid
  isInvalidControl(controlName: string): boolean {
  const _c = this.formLogin.get(controlName);
  return _c.errors && !_c.errors.required && _c.errors[controlName]  && (_c.dirty || _c.touched);
  }
}
