import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImptoPage } from './impto.page';

const routes: Routes = [
  {
    path: '',
    component: ImptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImptoPageRoutingModule {}
