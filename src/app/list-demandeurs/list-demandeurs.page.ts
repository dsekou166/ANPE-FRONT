import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeurService } from '../Services/demandeur.service';

@Component({
  selector: 'app-list-demandeurs',
  templateUrl: './list-demandeurs.page.html',
  styleUrls: ['./list-demandeurs.page.scss'],
})
export class ListDemandeursPage implements OnInit {
  alldemandeur:any
  searhText:any
  responsive=true
  p:number=1
  constructor(private demd:DemandeurService,private router:Router) { }

  ngOnInit(): void {
    this.demd.getdemandeur().subscribe(data => {
      this.alldemandeur = data
      
    }
    )
  }
  goToDetaildemandeur(id:number){
    return this.router.navigate(['tabs2/user-info', id])
  }

}
