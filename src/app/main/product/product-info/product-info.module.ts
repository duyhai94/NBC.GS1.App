import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductInfoPageRoutingModule } from './product-info-routing.module';

import { ProductInfoPage } from './product-info.page';
import { BaseHeaderModule } from 'src/app/base/base-header/base-header.component';
import { BaseTitleModule } from 'src/app/base/base-title/base-title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductInfoPageRoutingModule,
    BaseHeaderModule,
    BaseTitleModule,
  ],
  declarations: [ProductInfoPage]
})
export class ProductInfoPageModule {}
