import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from '../Services/annonce.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  searhText:any
  responsive=true
  p:number=1
  allannonce: any;
  message:any;
  constructor(private annonceservice: AnnonceService, private route : Router) { }
  ngOnInit(): void {
    this.annonceservice.getannonce().subscribe(data => {

      this.allannonce = data
      console.log(this.allannonce)
    }
    )
  }

  goToDetailannonce(id:number){
    return this.route.navigate(['tabs/detailsannonce', id])
  }

}
