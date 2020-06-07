import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../service/items.service'

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  items=[]

  constructor(private service:ItemsService) { }
  deleteItems;
  addItems;

  ngOnInit(): void {
    this.items=this.service.getItems();
    this.addItems=(item)=>{
      this.service.addItem(item);
    }
    this.deleteItems=(item)=>{
      this.items=this.service.deleteItems(item);
    }
  }

}
