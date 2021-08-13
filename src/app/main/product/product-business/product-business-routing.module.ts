import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductBusinessPage } from './product-business.page';

const routes: Routes = [
  {
    path: '',
    component: ProductBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductBusinessPageRoutingModule {}
