import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilRecruteurPage } from './accueil-recruteur.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilRecruteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilRecruteurPageRoutingModule {}
