import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilRecruteurPage } from './profil-recruteur.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilRecruteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilRecruteurPageRoutingModule {}
