import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeurService } from '../Services/demandeur.service';
import { RecruteurService } from '../Services/recruteur.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-profil-recruteur',
  templateUrl: './profil-recruteur.page.html',
  styleUrls: ['./profil-recruteur.page.scss'],
})
export class ProfilRecruteurPage implements OnInit {
  unrecruteur: any;
  idrecruteur: any;
  constructor(private route:ActivatedRoute,private servre:RecruteurService,private storageService:StorageService,private router:Router) { }

  ngOnInit(): void {
    //this.currentUser = this.storageService.getUser;
    this.idrecruteur= this.storageService.getUser();

    this.servre.getrecruteurbyid(this.idrecruteur.id).subscribe(data=>{
      this.unrecruteur= data;
      //this.nomdemandeur= this.undemandeur.nomdemandeur
     
      
    })
  }
  
  logout(): void {
    this.servre.logoutdemandeur().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.router.navigateByUrl("/auth2")
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
