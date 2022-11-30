import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImptoPageRoutingModule } from './impto-routing.module';

import { ImptoPage } from './impto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImptoPageRoutingModule
  ],
  declarations: [ImptoPage]
})
export class ImptoPageModule {}
