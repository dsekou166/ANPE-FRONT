import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DemandeurService } from '../Services/demandeur.service';
import { DossierService } from '../Services/dossier.service';

@Component({
  selector: 'app-inscription-user',
  templateUrl: './inscription-user.page.html',
  styleUrls: ['./inscription-user.page.scss'],
})
export class InscriptionUserPage implements OnInit {
  
  nomDemandeur:any
  prenomDemandeur:any
  adresseDemandeur: any
  ageDemandeur:any
  emailDemandeur:any
  cv:any
  //retour:any
  dossierDemandeur:any
  profilDemandeur:any
  photodemandeur:any
  passwordDemandeur: any
  //role:any
  demandeurdata:any
  message!: string
  erreur!: boolean
  file: any
  image: any
  alldossier:any
  constructor(private dossier:DossierService,private toast:ToastController,private demandeurserv:DemandeurService,private router:Router){ }

  ngOnInit(): void {
    this.dossier.getdossier().subscribe(data => {

      this.alldossier = data
      console.log(this.alldossier)
    }
    )
  }

  add(){
    //console.log(this.nomposte)
    var demandeur=[{
      "nomDemandeur":this.nomDemandeur,
      "prenomDemandeur":this.prenomDemandeur,
      "adresseDemandeur":this.adresseDemandeur,
      "ageDemandeur":this.ageDemandeur,
      "emailDemandeur":this.emailDemandeur,
      "cv":"",
      //"retour":this.retour,
      "dossierDemandeur":"",
      "profilDemandeur":this.profilDemandeur,
      "photoDemandeur":"",
      "passwordDemandeur":this.passwordDemandeur,
     //"role":this.role,

    }] 
    const data=new FormData
    data.append('image',this.image)
    data.append('cv',this.cv)
    data.append('dossierDemandeur',this.dossierDemandeur)
    data.append('demandeur', JSON.stringify(demandeur).slice(1,JSON.stringify(demandeur).lastIndexOf(']')));
    console.log("mes donnees avant",demandeur);
    this.demandeurserv.demandeurregister(demandeur,this.image,this.dossierDemandeur,this.cv).subscribe(data=>{
      this.demandeurdata=data
      console.log(demandeur)
    })
    this.formreset()
    this.retourmessage()
    //this.router.navigateByUrl("/authentification")

  }

  selectFile(e:any){
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.message="Vous devez choisir un fichier  !";
      this.erreur=true;
      return;
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas une photo
    var typeFichier=e.target.files[0].type;
    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.message="";
        //this.fichier=event.target.result;
        this.image=e.target['files'][0];
      }
    }
  }
  selectdoc(e:any){
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.message="Vous devez choisir un fichier  !";
      this.erreur=true;
      return;
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas une photo
    var typeFichier=e.target.files[0].type;
    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.message="";
        //this.fichier=event.target.result;
        this.dossierDemandeur=e.target['files'][0];
        console.log(this.dossierDemandeur);
      }
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas une photo
    var typeFichier=e.target.files[0].type;
    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.message="";
        //this.fichier=event.target.result;
        this.cv=e.target['files'][0];
        console.log(this.cv);
      }
    }
  }

  async retourmessage() {
    let toast = this.toast.create({
      message: 'Votre inscription a été valider allez-y vous connecter',
      duration: 3000,
      color:'success',
      position: 'bottom'
    });
    (await toast).present();
  }

  formreset(){

  this.photodemandeur='',
  this.dossierDemandeur='',
  this.cv='',
  this.profilDemandeur='',
  this.passwordDemandeur='',
  this.emailDemandeur='',
  this.ageDemandeur='',
  this.adresseDemandeur='',
  this.prenomDemandeur='',
  this.nomDemandeur=''
  }

}


