import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import { BaseHeaderNavModule } from 'src/app/base/base-header-nav/base-header-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    BaseHeaderNavModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
