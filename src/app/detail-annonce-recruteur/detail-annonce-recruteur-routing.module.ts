import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAnnonceRecruteurPage } from './detail-annonce-recruteur.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAnnonceRecruteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAnnonceRecruteurPageRoutingModule {}
