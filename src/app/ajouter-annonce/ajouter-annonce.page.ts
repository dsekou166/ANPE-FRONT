import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { timeStamp } from 'console';
import { AnnonceService } from '../Services/annonce.service';
import { DossierService } from '../Services/dossier.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.page.html',
  styleUrls: ['./ajouter-annonce.page.scss'],
})
export class AjouterAnnoncePage implements OnInit {
  nomposte:any
  idrecruteur:any
  typecontrat:any
  experience: any
  lieu:any
  datedebut:any
  datefin:any
  descriptionannonce:any
  profil:any
  photo:any
  dossierannonce:any
  annoncedata: any;
  message!: string;
  erreur!: boolean;
  fichier: any;
  dossier: any;
  alldossier:any
  constructor(private service:DossierService,private toast:ToastController,private annonceserv:AnnonceService, private storage:StorageService,private route:Router) { }

  ngOnInit(): void {
    this.service.getdossier().subscribe(data => {

      this.alldossier = data
      //console.log(this.alldossier)
    }
    )
  } 

  add(){
    console.log(this.nomposte)
    var annonce=[{
      "nomposte":this.nomposte,
      "typecontrat":this.typecontrat,
      "photo":'',
      "profil":this.profil,
      "descriptionannonce":this.descriptionannonce,
      "datedebut":this.datedebut,
      "datefin":this.datefin,
      "lieu":this.lieu,
      "idrecruteur":this.idrecruteur,
      "dossierannonce":'',
      "experience":this.experience,
  
    }] 
    const data=new FormData
    data.append('file',this.fichier)
    data.append('dossier',this.dossier)
    data.append('annonce', JSON.stringify(annonce).slice(1,JSON.stringify(annonce).lastIndexOf(']')));
    console.log("mes donnees avant",annonce);
    this.idrecruteur= this.storage.getUser();
    this.annonceserv.creerannonce(this.nomposte,this.idrecruteur.id,annonce,this.fichier,this.dossier).subscribe(data=>{
      this.annoncedata=data
      console.log(this.annoncedata)
      
    })
    this.formreset()
    this.messageretour()
    //this.route.navigateByUrl('/recruteur')
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
        this.fichier=e.target['files'][0];
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
        this.dossier=e.target['files'][0];
        console.log(this.dossier);
      }
    }
    
  }
  formreset(){
    this.nomposte = '',
    this.dossierannonce = '',
    this.photo = '',
    this.descriptionannonce = '',
    this.datefin = '',
    this.datedebut = '',
    this.lieu = '',
    this.experience = '',
    this.profil='',
    this.typecontrat=''
  }

  async messageretour() {
    let toast = this.toast.create({
      message: 'Annonce creer avec succès',
      duration: 3000,
      color:'success',
      position: 'bottom'
    });
    (await toast).present();
  }
}
