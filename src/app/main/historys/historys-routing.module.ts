import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorysPage } from './historys.page';

const routes: Routes = [
  {
    path: '',
    component: HistorysPage,
    
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorysPageRoutingModule {}
