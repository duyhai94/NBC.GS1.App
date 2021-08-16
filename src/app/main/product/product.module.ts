import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { BaseTitleModule } from 'src/app/base/base-title/base-title.component';
import { HomeSlideProductModule } from '../home/home-slide-product/home-slide-product.component';
import { IonicRatingComponentModule } from 'ionic-rating-component';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    BaseTitleModule,
    HomeSlideProductModule,
    IonicRatingComponentModule,
    BarRatingModule
  ],
  declarations: [ProductPage],
})
export class ProductPageModule {}
