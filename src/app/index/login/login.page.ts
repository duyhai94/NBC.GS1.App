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

}
