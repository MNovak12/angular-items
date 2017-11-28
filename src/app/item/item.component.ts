import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[];
  selectedItem: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  	this.getItems();
  }

  onSelect(item: Item): void {
  	this.selectedItem = item;
  }

  getItems(): void {
  	this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

}
