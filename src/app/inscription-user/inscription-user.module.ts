import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionUserPageRoutingModule } from './inscription-user-routing.module';

import { InscriptionUserPage } from './inscription-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionUserPageRoutingModule
  ],
  declarations: [InscriptionUserPage]
})
export class InscriptionUserPageModule {}
