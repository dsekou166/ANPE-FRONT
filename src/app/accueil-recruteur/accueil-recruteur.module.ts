import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilRecruteurPageRoutingModule } from './accueil-recruteur-routing.module';

import { AccueilRecruteurPage } from './accueil-recruteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilRecruteurPageRoutingModule
  ],
  declarations: [AccueilRecruteurPage]
})
export class AccueilRecruteurPageModule {}
