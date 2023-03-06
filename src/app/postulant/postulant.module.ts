import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { PostulantPageRoutingModule } from './postulant-routing.module';

import { PostulantPage } from './postulant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    IonicModule,
    PostulantPageRoutingModule
  ],
  declarations: [PostulantPage]
})
export class PostulantPageModule {}
