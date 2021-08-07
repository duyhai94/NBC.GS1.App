import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPass = false;
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
