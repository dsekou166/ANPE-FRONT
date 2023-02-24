import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accueil-recruteur',
  templateUrl: './accueil-recruteur.page.html',
  styleUrls: ['./accueil-recruteur.page.scss'],
})
export class AccueilRecruteurPage implements OnInit {
  roles:any
  constructor(private storageService: StorageService,private router:Router) { }

  ngOnInit() {

    this.roles = this.storageService.getUser().roles;
    if(this.roles[0]=="ROLE_RECRUTEUR"){
      this.router.navigateByUrl('/tabs2/recruteur')
    }
    
  }

}
