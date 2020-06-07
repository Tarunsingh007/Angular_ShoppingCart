import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewItemsComponent } from '../app/view-items/view-items.component'
import { ViewCartComponent } from '../app/view-cart/view-cart.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'viewAll', component:ViewItemsComponent  },
  { path: 'viewCart', component:ViewCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
