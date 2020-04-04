import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
  <h1>Dashboard Layout</h1>
  <p>
    <a routerLink="home" >Home</a> |
    <a routerLink="admin"> Admin </a> |
    <a routerLink="features"> features </a>
    <a routerLink="control-val-acc"> Control-value-accessor </a>
  </p>
<router-outlet></router-outlet>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
