import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierRecruteurPageRoutingModule } from './modifier-recruteur-routing.module';

import { ModifierRecruteurPage } from './modifier-recruteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierRecruteurPageRoutingModule
  ],
  declarations: [ModifierRecruteurPage]
})
export class ModifierRecruteurPageModule {}
