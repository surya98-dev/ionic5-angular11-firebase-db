import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahdataPage } from './tambahdata.page';

const routes: Routes = [
  {
    path: '',
    component: TambahdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahdataPageRoutingModule {}
