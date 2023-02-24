import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searhText:any
  responsive=true
  p:number=1
  //unenotif: any;
  //idnotifi: any;
  allnotif: any;
  constructor(private route:ActivatedRoute,private notifserv:NotificationService, private router:Router) {}

  ngOnInit(): void {
    this.notifserv.getnotif().subscribe(data => {

      this.allnotif = data
      console.log(this.allnotif)
    }
    )
  }
}
