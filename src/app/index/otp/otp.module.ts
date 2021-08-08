import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpPageRoutingModule } from './otp-routing.module';

import { OtpPage } from './otp.page';
import { BaseHeaderModule } from 'src/app/base/base-header/base-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpPageRoutingModule,
    BaseHeaderModule
  ],
  declarations: [OtpPage]
})
export class OtpPageModule {}
