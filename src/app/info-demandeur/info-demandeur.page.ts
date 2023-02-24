import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DemandeurService } from '../Services/demandeur.service';
import { RecruteurService } from '../Services/recruteur.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-info-demandeur',
  templateUrl: './info-demandeur.page.html',
  styleUrls: ['./info-demandeur.page.scss'],
})
export class InfoDemandeurPage implements OnInit {
  iddemandeur:any
  demandeur:any
  idrecruteur:any
  decriptionretour:any
  constructor(
    private act:ActivatedRoute,
    private demd:DemandeurService,
    private storage:StorageService,
    private recr:RecruteurService,
    private toast:ToastController
    ) { }

  ngOnInit() {
    this.idrecruteur= this.storage.getUser()
    this.iddemandeur=this.act.snapshot.params["id"]

    this.demd.getdemandeurbyid(this.iddemandeur).subscribe(data=>{
      this.demandeur=data
      
    })
  }

  creermessage(){
    this.idrecruteur= this.storage.getUser()
    this.recr.AjouterUnMessage(this.decriptionretour,this.idrecruteur.id, this.iddemandeur ).subscribe(data=>{
  
      
    })
    this.formreset()
    this.messageretour()
  }

  async messageretour() {
    let toast = this.toast.create({
      message: 'Votre email a été envoyé',
      duration: 3000,
      color:'success',
      position: 'bottom'
    });
    (await toast).present();
  }

  formreset(){
    this.decriptionretour = ''
  }
  

}
