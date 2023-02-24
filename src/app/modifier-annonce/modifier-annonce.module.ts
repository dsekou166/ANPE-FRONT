import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierAnnoncePageRoutingModule } from './modifier-annonce-routing.module';

import { ModifierAnnoncePage } from './modifier-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierAnnoncePageRoutingModule
  ],
  declarations: [ModifierAnnoncePage]
})
export class ModifierAnnoncePageModule {}
