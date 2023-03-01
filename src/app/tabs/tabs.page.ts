import { Component, ViewChild } from '@angular/core';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(RouterOutlet) outlet?: RouterOutlet;

  constructor(private route : Router) {}
  ngOnInit(): void {
    this.route.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "tab1")
        this.outlet?.deactivate();
    });
  }
  }


