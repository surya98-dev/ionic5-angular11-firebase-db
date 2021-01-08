import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahdataPageRoutingModule } from './tambahdata-routing.module';

import { TambahdataPage } from './tambahdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahdataPageRoutingModule
  ],
  declarations: [TambahdataPage]
})
export class TambahdataPageModule {}
