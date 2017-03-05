import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule }             from '@angular/forms';
import { RouterModule }            from '@angular/router';

import { AppComponent }            from './app.component';
import { InventoryDetailComponent} from './inventory-detail.component';
import { InventoryComponent }      from './inventory.component';
import { InventoryService }        from './inventory.service';
import { DashboardComponent }      from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: InventoryDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryDetailComponent,
    InventoryComponent
  ],
  providers: [ InventoryService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
