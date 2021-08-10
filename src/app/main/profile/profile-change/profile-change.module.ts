import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileChangePageRoutingModule } from './profile-change-routing.module';

import { ProfileChangePage } from './profile-change.page';
import { BaseHeaderModule } from 'src/app/base/base-header/base-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileChangePageRoutingModule,
    BaseHeaderModule
  ],
  declarations: [ProfileChangePage]
})
export class ProfileChangePageModule {}
