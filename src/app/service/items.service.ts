import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  cartItems=[{
    id:8888,
    name:"some name",
    img:"https://source.unsplash.com/random/250x300",
    price:100,
    quantity:2
  }];
  added=false;
  constructor() { }

  addItem=(item)=>{
    this.cartItems.forEach((e)=>{
      if(e.id==item.id && !this.added){
        item.quantity+=1;
        this.added=true;
      }
    })
    if(!this.added)
      this.cartItems.push(item);
    this.added=false;
  }
  getItems=()=>{
    return this.cartItems;
  }
  deleteItems=(item)=>{
    if(item.quantity<=1){
      this.cartItems=this.cartItems.filter((e)=>{
        return item.id!==e.id;
      })
    }
    else{
      this.cartItems.forEach(e=>{
        if(e.id==item.id){
          e.quantity-=1;
        }
      })
    }
    return this.cartItems;
  }
}
