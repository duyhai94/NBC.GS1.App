import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModaSuccessComponent } from 'src/app/base/moda-success/moda-success.component';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(
    private activeRouter: ActivatedRoute,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(
      this.activeRouter.snapshot.params
    );
    
  }
  btnConfirm(){
    
      this.modaSuccess()
  }

  async modaSuccess() {
    const modal = await this.modalController.create({
      component: ModaSuccessComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        img: 'assets/icon/icon-success.svg',
        content: 'Đăng ký tài khoản thành công. </br>  Xin cảm ơn!',

      }
    });
    return await modal.present();
  } 

  reSendOTP(){}


  otpController(event,next,prev){
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
     return 0;
    } 
 }
}
