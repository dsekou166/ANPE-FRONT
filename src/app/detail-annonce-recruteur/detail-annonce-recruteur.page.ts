import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from '../Services/annonce.service';

@Component({
  selector: 'app-detail-annonce-recruteur',
  templateUrl: './detail-annonce-recruteur.page.html',
  styleUrls: ['./detail-annonce-recruteur.page.scss'],
})
export class DetailAnnonceRecruteurPage implements OnInit {
  idannonce:any
  annonce:any
  alldem: any;
  constructor(private route:ActivatedRoute,private ann:AnnonceService) { }

  ngOnInit() {

    this.idannonce=this.route.snapshot.params["id"]

    this.ann.getannoncebyid(this.idannonce).subscribe(data=>{
      this.annonce=data
      console.log( this.annonce)
    })
  }
  BTN(){
    
    this.ann.getdemandeurbyannonce(this.idannonce).subscribe(data=>{
      this.alldem=data
      console.log(this.alldem)
    })
  }

}
