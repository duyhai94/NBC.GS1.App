import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCertPage } from './product-cert.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCertPageRoutingModule {}
