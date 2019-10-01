import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  constructor() { }

  items: string[] = [];

  add(item: string){
    this.items.push(item);
  }

  clear(){
    this.items = [];
  }
}
