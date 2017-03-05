import { Injectable } from '@angular/core';

import { Inventory } from './inventory';
import { INVENTORY } from './mock-inventory';

@Injectable()
export class InventoryService{
  getInventory(): Promise<Inventory[]> {
    return Promise.resolve(INVENTORY);
  }

  getItem(id: number): Promise<Inventory>{
    return this.getInventory()
               .then(inventory => inventory.find(item => item.id === id));
  }
}
