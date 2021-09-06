import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataRegisterService } from 'src/app/service/data/data-register.service';
import { FormToast, invalidForm } from 'src/app/utils/pipes/valid.forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formToast = FormToast
  showPass1 = true;
  showPass2 = true;
  checkTruePW : boolean;
  formRegister = new FormGroup({
    Phone: new FormControl('',[Validators.required,invalidForm(/^\d{10}$/,'Phone')]),
    Password: new FormControl('',[Validators.required,invalidForm(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/,'Password')]),
    Confirm: new FormControl(''),
  });

  constructor(
    private router: Router,
    private dataRegisterService: DataRegisterService,
  ) {}

  ngOnInit() {}

  btnRegister() {
    if(this.formRegister.invalid){
      this.formRegister.markAllAsTouched();
      return
    }
    const _phone = this.formRegister.get('Phone').value;
    const _p = this.formRegister.get('Password').value;
    const _c = this.formRegister.get('Confirm').value;
    if(_p == _c) {
      this.checkTruePW =true
      const param = {
        Phone : _phone,
        Password: _c
      }
      this.dataRegisterService.pushData(param);
      this.router.navigateByUrl('index/otp/1');
      this.formRegister.reset();

    } else {
      this.checkTruePW = false;

    }

    
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
   // check valid
   isInvalidControl(controlName: string): boolean {
    const _c = this.formRegister.get(controlName);
    return _c.errors && !_c.errors.required && _c.errors[controlName]  && (_c.dirty || _c.touched);
    }
}
