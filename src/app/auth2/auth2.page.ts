import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RecruteurService } from '../Services/recruteur.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.page.html',
  styleUrls: ['./auth2.page.scss'],
})
export class Auth2Page implements OnInit {form: any = {
  emailDemandeur: null,
  passwordDemandeur: null
};
isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';
roles: string[] = [];

constructor(private servrecru:RecruteurService, private storageService: StorageService,private router:Router,private toast:ToastController){ }

ngOnInit(): void{

  this.roles = this.storageService.getUser().roles;
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

async errorToast2() {
  let toast = this.toast.create({
    message: 'Veillez renseigner des informations correctes',
    duration: 3000,
    color:'danger',
    position: 'bottom'
  });
  (await toast).present();
}

onSubmit(): void {
  const { emailentreprise, passwordentreprise } = this.form;
  this.servrecru.loginrecruteur(emailentreprise, passwordentreprise).subscribe({
    next: data => {
      this.storageService.saveUser(data);
      console.log(data.roles[0])
      if(data.roles[0]=="ROLE_RECRUTEUR"){

        this.router.navigateByUrl('/tabs2/recruteur')

      }
      if(data.roles[0]=="ROLE_USER"){

        this.router.navigateByUrl('/tabss/tab1')

      }
      //this.router.navigateByUrl('/tabs2/recruteur')
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
logout(): void {
 
      this.storageService.clean();
      this.router.navigateByUrl("/auth2")
      
    
}

 delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

}
