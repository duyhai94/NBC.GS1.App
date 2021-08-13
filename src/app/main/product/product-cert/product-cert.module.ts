import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCertPageRoutingModule } from './product-cert-routing.module';

import { ProductCertPage } from './product-cert.page';
import { BaseHeaderModule } from 'src/app/base/base-header/base-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCertPageRoutingModule,
    BaseHeaderModule
  ],
  declarations: [ProductCertPage]
})
export class ProductCertPageModule {}
