import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabssPage } from './tabss.page';

const routes: Routes = [
  {
    path: 'tabss',
    component: TabssPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'detailsannonce/:id',
        loadChildren: () => import('../details-annonce/details-annonce.module').then( m => m.DetailsAnnoncePageModule)
      },
      {
        path: 'user-info',
        loadChildren: () => import('../user-info/user-info.module').then( m => m.UserInfoPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'modifier-user',
        loadChildren: () => import('../modifier-user/modifier-user.module').then( m => m.ModifierUserPageModule)
      },
      
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      
      {
        path: 'details-annonce',
        loadChildren: () => import('../details-annonce/details-annonce.module').then( m => m.DetailsAnnoncePageModule)
      },
      
      
      {
        path: '',
        redirectTo: '/authentification',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabssPageRoutingModule {}
