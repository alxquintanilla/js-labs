import { Component, OnInit, Input, NgModule} from '@angular/core';
import {Hero} from "../hero";
import { ListService } from '../service/list.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ListService],
})
export class ItemListComponent implements OnInit {

  constructor(public listService: ListService) { }

  @Input() newItem: String;

  ngOnInit() {

  }

  addItem(){
    console.log("Adding:", this.newItem);
    if(this.newItem !== undefined && this.newItem !== "" && this.newItem !== null)
      this.listService.add(this.newItem);
    this.newItem = "";
  }

}
