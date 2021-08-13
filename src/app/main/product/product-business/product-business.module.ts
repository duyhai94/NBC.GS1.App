import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductBusinessPageRoutingModule } from './product-business-routing.module';

import { ProductBusinessPage } from './product-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductBusinessPageRoutingModule
  ],
  declarations: [ProductBusinessPage]
})
export class ProductBusinessPageModule {}
