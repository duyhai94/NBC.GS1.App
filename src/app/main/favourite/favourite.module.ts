import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritePageRoutingModule } from './favourite-routing.module';

import { FavouritePage } from './favourite.page';
import { BaseHeaderModule } from 'src/app/base/base-header/base-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritePageRoutingModule,
    BaseHeaderModule,
  ],
  declarations: [FavouritePage]
})
export class FavouritePageModule {}
