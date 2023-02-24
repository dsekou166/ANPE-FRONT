import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierAnnoncePage } from './modifier-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierAnnoncePageRoutingModule {}
