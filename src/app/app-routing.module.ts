import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription-user/inscription-user.module').then( m => m.InscriptionUserPageModule)
  },
  {
    path: 'recruteur',
    loadChildren: () => import('./accueil-recruteur/accueil-recruteur.module').then( m => m.AccueilRecruteurPageModule)
  },
  {
    path: 'list-demandeurs',
    loadChildren: () => import('./list-demandeurs/list-demandeurs.module').then( m => m.ListDemandeursPageModule)
  },
  {
    path: 'details-annonce',
    loadChildren: () => import('./details-annonce/details-annonce.module').then( m => m.DetailsAnnoncePageModule)
  },
  {
    path: 'ajouter-annonce',
    loadChildren: () => import('./ajouter-annonce/ajouter-annonce.module').then( m => m.AjouterAnnoncePageModule)
  },
  {
    path: 'modifier-annonce',
    loadChildren: () => import('./modifier-annonce/modifier-annonce.module').then( m => m.ModifierAnnoncePageModule)
  },
  {
    path: 'modifier-user',
    loadChildren: () => import('./modifier-user/modifier-user.module').then( m => m.ModifierUserPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./user-info/user-info.module').then( m => m.UserInfoPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  
  {
    path: '',
    loadChildren: () => import('./tabs2/tabs2.module').then( m => m.Tabs2PageModule)
  },
  {
    path: 'profil-recruteur',
    loadChildren: () => import('./profil-recruteur/profil-recruteur.module').then( m => m.ProfilRecruteurPageModule)
  },
  {
    path: 'annonce-recruteur',
    loadChildren: () => import('./annonce-recruteur/annonce-recruteur.module').then( m => m.AnnonceRecruteurPageModule)
  },
  {
    path: 'detail-annonce-recruteur',
    loadChildren: () => import('./detail-annonce-recruteur/detail-annonce-recruteur.module').then( m => m.DetailAnnonceRecruteurPageModule)
  },
  {
    path: 'modifier-recruteur',
    loadChildren: () => import('./modifier-recruteur/modifier-recruteur.module').then( m => m.ModifierRecruteurPageModule)
  },
  {
    path: 'auth2',
    loadChildren: () => import('./auth2/auth2.module').then( m => m.Auth2PageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'postulant',
    loadChildren: () => import('./postulant/postulant.module').then( m => m.PostulantPageModule)
  },
  {
    path: 'info-demandeur',
    loadChildren: () => import('./info-demandeur/info-demandeur.module').then( m => m.InfoDemandeurPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
