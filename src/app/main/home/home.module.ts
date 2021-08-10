import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BaseHeaderNavModule } from 'src/app/base/base-header-nav/base-header-nav.component';
import { BaseTitleModule } from 'src/app/base/base-title/base-title.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomeSlideNewsModule } from './home-slide-news/home-slide-news.component';
import { HomeSlideProductComponent } from './home-slide-product/home-slide-product.component';
import { HomeSlideComponent } from './home-slide/home-slide.component';
import { HomePage } from './home.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BaseHeaderNavModule,
    BaseTitleModule,
    HomeSlideNewsModule,

  ],
  declarations: [HomePage,HomeSlideComponent,HomeSlideProductComponent, ]
})
export class HomePageModule {}
