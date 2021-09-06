import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataForgotService } from 'src/app/service/data/data-forgot.service';
import { FormToast, invalidForm } from 'src/app/utils/pipes/valid.forms';

const Phone = '0123456789'
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  checkForgot :boolean;
  formToast = FormToast
  formForgot = new FormGroup ({
      Phone: new FormControl('',[Validators.required,invalidForm(/^\d{10}$/,'Phone')])
    })
  constructor(
    private router: Router,
    private dataService: DataForgotService
  ) { }

  ngOnInit() {
  }

  btnForgot(){
    if( this.formForgot.invalid){
      this.formForgot.markAllAsTouched();
      return
    }
    const _p = this.formForgot.get('Phone').value;
    if(_p == Phone){
      this.checkForgot = true;
      const data = {
        Phone : _p
      }
      this.dataService.pushData(data);
      this.router.navigateByUrl('index/otp/2');
    }else {
      this.checkForgot = false
    }
  }
  // check valid
  isInvalidControl(controlName: string): boolean {
  const _c = this.formForgot.get(controlName);
  return _c.errors && !_c.errors.required && _c.errors[controlName]  && (_c.dirty || _c.touched);
  }
}
