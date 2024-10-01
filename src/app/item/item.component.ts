import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  imports: [NgIf],
  standalone: true,
})
export class ItemComponent {
  editable = false;

  @Input({ required: true }) item!: Item;
  @Input() newItem?: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;

    this.editable = false;
    this.item.description = description;
  }
}
