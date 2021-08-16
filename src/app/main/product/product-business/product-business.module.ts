import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductBusinessPageRoutingModule } from './product-business-routing.module';

import { ProductBusinessPage } from './product-business.page';
import { HomeSlideProductModule } from '../../home/home-slide-product/home-slide-product.component';
import { BaseTitleModule } from 'src/app/base/base-title/base-title.component';
import { HomeSlideNewsModule } from '../../home/home-slide-news/home-slide-news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductBusinessPageRoutingModule,
    HomeSlideProductModule,
    BaseTitleModule,
    HomeSlideNewsModule,
  ],
  declarations: [ProductBusinessPage]
})
export class ProductBusinessPageModule {}
