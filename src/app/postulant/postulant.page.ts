import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from '../Services/annonce.service';

@Component({
  selector: 'app-postulant',
  templateUrl: './postulant.page.html',
  styleUrls: ['./postulant.page.scss'],
})
export class PostulantPage implements OnInit {
  alldem:any
  idannonce:any
  demandeur:any
  searhText:any
  responsive=true
  p:number=1
  constructor(private ann:AnnonceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.idannonce=this.route.snapshot.params["id"]
    this.ann.getdemandeurbyannonce(this.idannonce).subscribe(data=>{
      this.alldem=data
      console.log(this.alldem)
    })

   
  }

  goToDetaildemandeur(id:number){
    return this.router.navigate(['tabs2/info-demandeur', id])
  }

  BTN(){
    
    this.ann.getdemandeurbyannonce(this.idannonce).subscribe(data=>{
      this.alldem=data
      //console.log(this.alldem)
    })
  }

}
