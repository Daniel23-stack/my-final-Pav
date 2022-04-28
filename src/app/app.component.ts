import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--header-->
    <!--my nav-->
    <app-header></app-header>
   

    <!--footer-->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'PAVTEL';
}
