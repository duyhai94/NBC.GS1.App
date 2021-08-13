import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPage } from './product.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPage
  },
  {
    path: 'product-reviews',
    loadChildren: () => import('./product-reviews/product-reviews.module').then( m => m.ProductReviewsPageModule)
  },
  {
    path: 'product-info',
    loadChildren: () => import('./product-info/product-info.module').then( m => m.ProductInfoPageModule)
  },
  {
    path: 'product-cert',
    loadChildren: () => import('./product-cert/product-cert.module').then( m => m.ProductCertPageModule)
  },
  {
    path: 'product-business',
    loadChildren: () => import('./product-business/product-business.module').then( m => m.ProductBusinessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
