import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Auth2Page } from './auth2.page';

const routes: Routes = [
  {
    path: '',
    component: Auth2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Auth2PageRoutingModule {}
