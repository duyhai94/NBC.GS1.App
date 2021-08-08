import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPageRoutingModule } from './forgot-routing.module';

import { ForgotPage } from './forgot.page';
import { BaseHeaderModule } from 'src/app/base/base-header/base-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPageRoutingModule,
    BaseHeaderModule,
    ReactiveFormsModule,

  ],
  declarations: [ForgotPage]
})
export class ForgotPageModule {}
