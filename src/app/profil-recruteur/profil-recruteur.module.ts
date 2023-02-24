import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilRecruteurPageRoutingModule } from './profil-recruteur-routing.module';

import { ProfilRecruteurPage } from './profil-recruteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilRecruteurPageRoutingModule
  ],
  declarations: [ProfilRecruteurPage]
})
export class ProfilRecruteurPageModule {}
