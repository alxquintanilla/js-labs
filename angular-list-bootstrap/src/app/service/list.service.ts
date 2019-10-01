import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  items: String[] = [];

  add(item: String){
    this.items.push(item);
  }

  clear(){
    this.items = [];
  }

}
