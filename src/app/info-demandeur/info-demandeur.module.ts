import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoDemandeurPageRoutingModule } from './info-demandeur-routing.module';

import { InfoDemandeurPage } from './info-demandeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoDemandeurPageRoutingModule
  ],
  declarations: [InfoDemandeurPage]
})
export class InfoDemandeurPageModule {}
