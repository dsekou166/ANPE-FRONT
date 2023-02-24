import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from '../Services/annonce.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-details-annonce',
  templateUrl: './details-annonce.page.html',
  styleUrls: ['./details-annonce.page.scss'],
})
export class DetailsAnnoncePage implements OnInit {
  uneannonce: any;
  idannonce: any;
  iddemandeur:any;
  

  constructor(private route:ActivatedRoute,private annonceserv:AnnonceService,private storage:StorageService) { }

  ngOnInit() {

    this.iddemandeur= this.storage.getUser()
    this.idannonce=this.route.snapshot.params["id"]

    this.annonceserv.getannoncebyid(this.idannonce).subscribe(data=>{
      this.uneannonce=data
      console.log( this.uneannonce)
    })
  }

  postulerannonce(iddemandeur: any, idannonce: any){

    this.annonceserv.postuler(this.iddemandeur.id, this.idannonce).subscribe(data=>{
  
      
    })
   
  }

  

}
