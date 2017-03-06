import { Component, OnInit }    from '@angular/core';

import { Inventory }            from './inventory';
import { InventoryService }     from './inventory.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  inventory: Inventory[] = [];

  constructor(private inventoryService: InventoryService){}

  ngOnInit(): void {
    this.inventoryService.getInventory()
          .then(inventory => this.inventory = inventory.slice(1,4));
  }

}
