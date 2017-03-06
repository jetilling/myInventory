import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule }             from '@angular/forms';
import { RouterModule }            from '@angular/router';

import { AppComponent }            from './app.component';
import { InventoryDetailComponent} from './inventory-detail.component';
import { InventoryComponent }      from './inventory.component';
import { InventoryService }        from './inventory.service';
import { DashboardComponent }      from './dashboard.component';

import { AppRoutingModule }        from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
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
