import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DemandeurService } from '../Services/demandeur.service';
import { StorageService } from '../Services/storage.service';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit { 
  form: any = {
    emailDemandeur: null,
    passwordDemandeur: null
};
isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
  constructor(private servdemand:DemandeurService, private storageService: StorageService,private router:Router,private toast:ToastController){ }

  ngOnInit(): void{
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      
    }
  }
 async errorToast() {
    let toast = this.toast.create({
      message: 'Email ou mots de passe incorrectes',
      duration: 3000,
      color:'danger',
      position: 'bottom'
    });
    (await toast).present();
  }

  onSubmit(): void {
    const { emailDemandeur, passwordDemandeur } = this.form;
    this.servdemand.logindemandeur(emailDemandeur, passwordDemandeur).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        if(data.roles[0]=="ROLE_USER"){

          this.router.navigateByUrl('/tabss/tab1')
  
        }
        if(data.roles[0]=="ROLE_RECRUTEUR"){

          this.erreur()
          this.router.navigateByUrl('/authentification')
  
        }
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        if(err.error.error=="Unauthorized"){
          this.errorToast()
        }
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  async erreur() {
    let toast = this.toast.create({
      message: 'Allez sur page du recruteur',
      duration: 3000,
      color:'danger',
      position: 'bottom'
    });
    (await toast).present();
  }

  
}

