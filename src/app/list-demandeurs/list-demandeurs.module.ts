import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDemandeursPageRoutingModule } from './list-demandeurs-routing.module';

import { ListDemandeursPage } from './list-demandeurs.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    IonicModule,

    ListDemandeursPageRoutingModule
  ],
  declarations: [ListDemandeursPage]
})
export class ListDemandeursPageModule {}
