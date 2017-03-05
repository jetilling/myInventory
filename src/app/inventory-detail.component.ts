import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Inventory}                 from './inventory';
import { InventoryService }         from './inventory.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-inventory-detail',
  templateUrl: './inventory-detail.component.html'
})

export class InventoryDetailComponent implements OnInit {
  @Input()
  inventory: Inventory;

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.inventoryService.getItem(+params['id']))
      .subscribe(item => this.inventory = item)
  }
}
