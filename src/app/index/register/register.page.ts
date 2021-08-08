import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  showPass1 = true;
  showPass2 = true;

  formRegister = new FormGroup({
    Phone: new FormControl(''),
    Password: new FormControl(''),
    Confirm: new FormControl(''),
  });

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  btnRegister() {
    console.log(this.formRegister.value);
    this.router.navigateByUrl('index/otp/1')
  }
  btnTogglePassword(ev) {
    switch (ev) {
      case 1:
        this.showPass1 = !this.showPass1;
        break;
      case 2:
        this.showPass2 = !this.showPass2;
        break;
    }
  }
}
