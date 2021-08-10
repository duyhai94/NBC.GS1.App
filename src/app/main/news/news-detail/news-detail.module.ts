import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDetailPageRoutingModule } from './news-detail-routing.module';

import { NewsDetailPage } from './news-detail.page';
import { BaseHeaderModule } from 'src/app/base/base-header/base-header.component';
import { BaseTitleModule } from 'src/app/base/base-title/base-title.component';
import { HomeSlideNewsModule } from '../../home/home-slide-news/home-slide-news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDetailPageRoutingModule,
    BaseHeaderModule,
    BaseTitleModule,
    HomeSlideNewsModule
  ],
  declarations: [NewsDetailPage]
})
export class NewsDetailPageModule {}
