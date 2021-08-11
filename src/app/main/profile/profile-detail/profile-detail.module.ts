import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileDetailPageRoutingModule } from './profile-detail-routing.module';

import { ProfileDetailPage } from './profile-detail.page';
import { BaseHeaderModule } from 'src/app/base/base-header/base-header.component';
import { BaseCardProfileModule } from 'src/app/base/base-card-profile/base-card-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfileDetailPageRoutingModule,
    BaseHeaderModule,
    BaseCardProfileModule,
  ],
  declarations: [ProfileDetailPage]
})
export class ProfileDetailPageModule {}
