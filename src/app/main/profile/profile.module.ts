import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { BaseHeaderModule } from 'src/app/base/base-header/base-header.component';
import { BaseCardProfileModule } from 'src/app/base/base-card-profile/base-card-profile.component';
import { BaseTitleModule } from 'src/app/base/base-title/base-title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    BaseHeaderModule,
    BaseCardProfileModule,
    BaseTitleModule,
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
