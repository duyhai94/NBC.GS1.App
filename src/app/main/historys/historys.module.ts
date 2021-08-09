import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorysPageRoutingModule } from './historys-routing.module';

import { HistorysPage } from './historys.page';
import { BaseHeaderNavModule } from 'src/app/base/base-header-nav/base-header-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorysPageRoutingModule,
    BaseHeaderNavModule,
  ],
  declarations: [HistorysPage]
})
export class HistorysPageModule {}
