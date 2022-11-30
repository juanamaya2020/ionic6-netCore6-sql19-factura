import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImptoCreatePage } from './impto-create.page';

const routes: Routes = [
  {
    path: '',
    component: ImptoCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImptoCreatePageRoutingModule {}
