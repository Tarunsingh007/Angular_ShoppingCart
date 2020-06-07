import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../service/items.service'

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  img:string="https://source.unsplash.com/random/250x300";
  id:number=0;
  items=[{
    id:++(this.id),
    name:"some name",
    img:this.img,
    price:100,
    quantity:1
  },{
    id:++(this.id),
    name:"some name",
    img:this.img,
    price:100,
    quantity:1
  },{
    id:++(this.id),
    name:"some name",
    img:this.img,
    price:100,
    quantity:1
  },{
    id:++(this.id),
    name:"some name",
    img:this.img,
    price:100,
    quantity:1
  },{
    id:++(this.id),
    name:"some name",
    img:this.img,
    price:100,
    quantity:1
  },{
    id:++(this.id),
    name:"some name",
    img:this.img,
    price:100,
    quantity:1
  }];
  addToCart

  constructor(private service:ItemsService) { }

  ngOnInit(): void { 
    this.addToCart=(item)=>{
      this.service.addItem(item);
    }
  }

}
