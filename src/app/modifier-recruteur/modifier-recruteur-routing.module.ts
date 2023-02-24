import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierRecruteurPage } from './modifier-recruteur.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierRecruteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierRecruteurPageRoutingModule {}
