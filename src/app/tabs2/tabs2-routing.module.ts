import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabs2Page } from './tabs2.page';

const routes: Routes = [
  {
    path: 'tabs2',
    component: Tabs2Page,
    children: [
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'postulant/:id',
        loadChildren: () => import('../postulant/postulant.module').then( m => m.PostulantPageModule)
      },
      {
        path: 'info-demandeur/:id',
        loadChildren: () => import('../info-demandeur/info-demandeur.module').then( m => m.InfoDemandeurPageModule)
      },
      {
        path: 'ajouter-annonce',
        loadChildren: () => import('../ajouter-annonce/ajouter-annonce.module').then( m => m.AjouterAnnoncePageModule)
      },
      {
        path: 'profil-recruteur',
        loadChildren: () => import('../profil-recruteur/profil-recruteur.module').then( m => m.ProfilRecruteurPageModule)
      },
      {
        path: 'recruteur',
        loadChildren: () => import('../accueil-recruteur/accueil-recruteur.module').then( m => m.AccueilRecruteurPageModule)
      },
      {
        path: 'annonce-recruteur',
        loadChildren: () => import('../annonce-recruteur/annonce-recruteur.module').then( m => m.AnnonceRecruteurPageModule)
      },
      {
        path: 'modifier-recruteur',
        loadChildren: () => import('../modifier-recruteur/modifier-recruteur.module').then( m => m.ModifierRecruteurPageModule)
      },
      {
        path: 'detail-annonce-recruteur/:id',
        loadChildren: () => import('../detail-annonce-recruteur/detail-annonce-recruteur.module').then( m => m.DetailAnnonceRecruteurPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'list-demandeurs',
        loadChildren: () => import('../list-demandeurs/list-demandeurs.module').then( m => m.ListDemandeursPageModule)
      },
      {
        path: 'modifier-annonce',
        loadChildren: () => import('../modifier-annonce/modifier-annonce.module').then( m => m.ModifierAnnoncePageModule)
      },
      {
        path: 'ajouter-annonce',
        loadChildren: () => import('../ajouter-annonce/ajouter-annonce.module').then( m => m.AjouterAnnoncePageModule)
      },
      {
        path: 'user-info/:id',
        loadChildren: () => import('../user-info/user-info.module').then( m => m.UserInfoPageModule)
      },




    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabs2PageRoutingModule {}
