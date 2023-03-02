import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabssPageRoutingModule } from './tabss-routing.module';

import { TabssPage } from './tabss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabssPageRoutingModule
  ],
  declarations: [TabssPage]
})
export class TabssPageModule {}
