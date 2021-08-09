import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { BaseHeaderNavModule } from 'src/app/base/base-header-nav/base-header-nav.component';
import { HomeSlideComponent } from './home-slide/home-slide.component';
import { BaseTitleModule } from 'src/app/base/base-title/base-title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BaseHeaderNavModule,
    BaseTitleModule,
  ],
  declarations: [HomePage, HomeSlideComponent]
})
export class HomePageModule {}
