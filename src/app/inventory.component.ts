import { Component }        from '@angular/core';
import { OnInit }           from '@angular/core';
import { Inventory }        from './inventory';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'my-inventory',
  template: `
  <h1>{{title}}</h1>
  <h2>Selected Item</h2>
  <ul class="inventory">
    <li *ngFor="let item of inventory" [class.selected]="item === selectedInventory" (click)="onSelect(item)">
      <span class="badge">{{item.id}}</span> {{item.name}} {{item.value}}
    </li>
  </ul>
  <my-inventory-detail [inventory]="selectedInventory"></my-inventory-detail>
`,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .inventory {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .inventory li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .inventory li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .inventory li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .inventory .text {
      position: relative;
      top: -3px;
    }
    .inventory .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class InventoryComponent implements OnInit {
  title = 'My Inventory';
  inventory: Inventory[];
  selectedInventory: Inventory;

  onSelect(item: Inventory): void{
    this.selectedInventory = item;
  }

  constructor(private inventoryService: InventoryService) {}

  getInventory(): void {
    this.inventoryService.getInventory().then(inventory => this.inventory = inventory);
  }

  ngOnInit(): void {
    this.getInventory();
  }
}
