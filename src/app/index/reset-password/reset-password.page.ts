import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModaSuccessComponent } from 'src/app/base/moda-success/moda-success.component';
import { DataForgotService } from 'src/app/service/data/data-forgot.service';
import { FormToast, invalidForm } from 'src/app/utils/pipes/valid.forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  formToast = FormToast;
  dataForgot;
  checkTruePW : boolean;
  showPass1 = true;
  showPass2 = true;
  formReset = new FormGroup({
    Password : new FormControl("",[Validators.required,invalidForm(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/,'Password')]),
    Confirm : new FormControl("",[Validators.required])
  })
  constructor(
    private modalController: ModalController,
    private dataForgotService: DataForgotService,
    private router: Router
  ) { }

  ngOnInit() {
      this.dataForgotService.currentData.subscribe(data =>this.dataForgot = data);
      if(this.dataForgot.Phone == undefined){
        this.router.navigateByUrl('index/login');
      }
  }
  btnReset(){
    if( this.formReset.invalid){
      this.formReset.markAllAsTouched();
      return
    }
    const _p = this.formReset.get('Password').value;
    const _c = this.formReset.get('Confirm').value;
    if(_p == _c){
        const param = {
          Phone: this.dataForgot.Phone,
          Password: _c
        }
        console.log(param);
        this.modaSuccess();
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
  async modaSuccess() {
    const modal = await this.modalController.create({
      component: ModaSuccessComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        img: 'assets/icon/icon-success-pw.svg',
        content1: 'Xin chúc mừng!',
        content2: 'Bạn đã tạo mật khẩu mới thành công.'
        

      }
    });
    return await modal.present();
  } 

  // check valid
  isInvalidControl(controlName: string): boolean {
    const _c = this.formReset.get(controlName);
    return _c.errors && !_c.errors.required && _c.errors[controlName]  && (_c.dirty || _c.touched);
    }
}
