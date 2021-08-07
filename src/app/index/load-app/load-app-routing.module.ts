import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadAppPage } from './load-app.page';

const routes: Routes = [
  {
    path: '',
    component: LoadAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadAppPageRoutingModule {}
