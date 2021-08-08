import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModaSuccessComponent } from 'src/app/base/moda-success/moda-success.component';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  checkRouter;
  back;
 
  constructor(
    private activeRouter: ActivatedRoute,
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
   this.checkRouter = this.activeRouter.snapshot.params.id;
   if(this.checkRouter == 1){
     this.back ='index/register';
   } else if( this.checkRouter == 2){
    this.back ='index/forgot';

   }
    
    
  }
  btnConfirm(){ 
    console.log(this.checkRouter);
    if(this.checkRouter == 1){
      this.modaSuccess();
    } else if (this.checkRouter == 2) {
      this.router.navigateByUrl('index/reset-password');

    }

   
  
  }

  async modaSuccess() {
    const modal = await this.modalController.create({
      component: ModaSuccessComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        img: 'assets/icon/icon-success.svg',
        content1: 'Đăng ký tài khoản thành công.',
        content2: ' Xin cảm ơn!'

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
