import { Component }    from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink='/dashboard'>Dashboard</a>
    <a routerLink='/inventory'>Inventory</a>
    <router-outlet></router-outlet>
    `
})

export class AppComponent{
  title = 'Inventory Tracker';
}
