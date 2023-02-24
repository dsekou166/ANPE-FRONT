import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAnnonceRecruteurPageRoutingModule } from './detail-annonce-recruteur-routing.module';

import { DetailAnnonceRecruteurPage } from './detail-annonce-recruteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAnnonceRecruteurPageRoutingModule
  ],
  declarations: [DetailAnnonceRecruteurPage]
})
export class DetailAnnonceRecruteurPageModule {}
