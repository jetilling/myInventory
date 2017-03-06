import { Component }        from '@angular/core';
import { OnInit }           from '@angular/core';
import { Router }           from '@angular/router';

import { Inventory }        from './inventory';
import { InventoryService } from './inventory.service';

@Component({
  moduleId: module.id,
  selector: 'my-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {
  title = 'My Inventory';
  inventory: Inventory[];
  selectedInventory: Inventory;

  onSelect(item: Inventory): void{
    this.selectedInventory = item;
  }

  constructor(
    private router: Router,
    private inventoryService: InventoryService
  ) {}

  getInventory(): void {
    this.inventoryService.getInventory().then(inventory => this.inventory = inventory);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedInventory.id]);
  }

  ngOnInit(): void {
    this.getInventory();
  }
}
