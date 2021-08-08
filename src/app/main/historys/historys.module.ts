import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorysPageRoutingModule } from './historys-routing.module';

import { HistorysPage } from './historys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorysPageRoutingModule
  ],
  declarations: [HistorysPage]
})
export class HistorysPageModule {}
