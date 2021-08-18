import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

const data = {
  userName : 'test@ci.com',
  password : '123456'
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPass =  true;
  showDelete = false;
  formLogin = new FormGroup({
    Email: new FormControl(""),
    Password: new FormControl(""),
    Save: new FormControl("")
  })
  constructor(
    private router: Router

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
    this.router.navigateByUrl('main')
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
}
