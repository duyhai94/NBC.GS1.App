import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModaSuccessComponent } from 'src/app/base/moda-success/moda-success.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  showPass1 = true;
  showPass2 = true;
  formReset = new FormGroup({
    Password : new FormControl(""),
    Confirm : new FormControl("")
  })
  constructor(
    private modalController: ModalController,

  ) { }

  ngOnInit() {
  }
  btnReset(){
    this.modaSuccess();
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
}
