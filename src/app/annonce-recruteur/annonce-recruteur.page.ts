import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from '../Services/annonce.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-annonce-recruteur',
  templateUrl: './annonce-recruteur.page.html',
  styleUrls: ['./annonce-recruteur.page.scss'],
})
export class AnnonceRecruteurPage implements OnInit {
  searhText:any
  responsive=true
  p:number=1
  idrecruteur:any
  annoncebyrecruteur:any
  constructor(private ann:AnnonceService,private route:Router,private router:ActivatedRoute,private storage:StorageService) { }

  ngOnInit(): void {
    //this.currentUser = this.storageService.getUser;
    this.idrecruteur= this.storage.getUser();

    this.ann.getannoncebyrecruteur(this.idrecruteur.id).subscribe(data=>{
      this.annoncebyrecruteur= data
      //this.nomdemandeur= this.undemandeur.nomdemandeur
     
      
    })
  }

  goToDetailannonce(id:number){
    return this.route.navigate(['tabs2/detail-annonce-recruteur', id])
  }

}
