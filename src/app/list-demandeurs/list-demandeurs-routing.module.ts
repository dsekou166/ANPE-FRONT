import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDemandeursPage } from './list-demandeurs.page';

const routes: Routes = [
  {
    path: '',
    component: ListDemandeursPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDemandeursPageRoutingModule {}
