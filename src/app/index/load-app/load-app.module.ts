import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadAppPageRoutingModule } from './load-app-routing.module';

import { LoadAppPage } from './load-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadAppPageRoutingModule
  ],
  declarations: [LoadAppPage]
})
export class LoadAppPageModule {}
