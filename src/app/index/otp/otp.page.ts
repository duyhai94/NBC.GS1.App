import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  OTP: string = '';

  formOTP = new FormGroup({
    otp1 : new FormControl(''),
    otp2 : new FormControl(''),
    otp3 : new FormControl(''),
    otp4 : new FormControl(''),
    otp5 : new FormControl(''),
    otp6 : new FormControl(''),
  })
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

    const o1 = this.formOTP.get('otp1').value;
    const o2 = this.formOTP.get('otp2').value;    
    const o3 = this.formOTP.get('otp3').value;    
    const o4 = this.formOTP.get('otp4').value;    
    const o5 = this.formOTP.get('otp5').value;    
    const o6 = this.formOTP.get('otp6').value;    
    const otp = o1+o2+o3+o4+o5+o6;
    console.log(otp);
    
       
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
