import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImptoCreatePageRoutingModule } from './impto-create-routing.module';

import { ImptoCreatePage } from './impto-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImptoCreatePageRoutingModule
  ],
  declarations: [ImptoCreatePage]
})
export class ImptoCreatePageModule {}
