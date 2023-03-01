import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { DemandeurService } from '../Services/demandeur.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  undemandeur: any;
  iddemandeur: any;
  //nomdemandeur=''
  currentUser: any;

  constructor(private route:ActivatedRoute,private servdemd:DemandeurService,private storageService:StorageService,private router:Router) { }

  ngOnInit(): void {
    //this.currentUser = this.storageService.getUser;
    this.iddemandeur= this.storageService.getUser();

    this.servdemd.getdemandeurbyid(this.iddemandeur.id).subscribe(data=>{
      this.undemandeur= data;
      //this.nomdemandeur= this.undemandeur.nomdemandeur
     
      
    })
  }
  
  logout(): void {
    this.servdemd.logoutdemandeur().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        
      },
      error: err => {
        console.log(err);
      }
    });
    this.router.navigateByUrl("/authentification")
        //window.location.reload();
  }

 
  }


