import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { IonicModule } from '@ionic/angular';

import { AnnonceRecruteurPageRoutingModule } from './annonce-recruteur-routing.module';

import { AnnonceRecruteurPage } from './annonce-recruteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AnnonceRecruteurPageRoutingModule
  ],
  declarations: [AnnonceRecruteurPage]
})
export class AnnonceRecruteurPageModule {}
