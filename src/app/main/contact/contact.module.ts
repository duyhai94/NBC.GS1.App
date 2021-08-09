import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { BaseHeaderNavModule } from 'src/app/base/base-header-nav/base-header-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    BaseHeaderNavModule,

  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
