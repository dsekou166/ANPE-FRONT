import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Auth2PageRoutingModule } from './auth2-routing.module';

import { Auth2Page } from './auth2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Auth2PageRoutingModule
  ],
  declarations: [Auth2Page]
})
export class Auth2PageModule {}
