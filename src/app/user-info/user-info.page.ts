import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DemandeurService } from '../Services/demandeur.service';
import { RecruteurService } from '../Services/recruteur.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  iddemandeur:any
  idrecruteur:any
  undemandeur:any
  decriptionretour:any
  constructor(private toast:ToastController,private recr:RecruteurService ,private storage:StorageService,private route:Router,private demd:DemandeurService,private act:ActivatedRoute) { }

  ngOnInit() {
    this.idrecruteur= this.storage.getUser()
    this.iddemandeur=this.act.snapshot.params["id"]

    this.demd.getdemandeurbyid(this.iddemandeur).subscribe(data=>{
      this.undemandeur=data
      console.log( this.undemandeur)
    })
  }

  creermessage(){
    this.idrecruteur= this.storage.getUser()
    this.recr.AjouterUnMessage(this.decriptionretour,this.idrecruteur.id, this.iddemandeur ).subscribe(data=>{
  
      
    })
    this.formreset()
    this.messageretour()
  }
  
  formreset(){
    this.decriptionretour=''
  }

  async messageretour() {
    let toast = this.toast.create({
      message: 'Votre email a été envoyé !',
      duration: 3000,
      color:'success',
      position: 'bottom'
    });
    (await toast).present();
  }

}
