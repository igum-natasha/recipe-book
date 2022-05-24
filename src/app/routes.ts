import {Routes} from "@angular/router";
import {Tab1Component} from "./tab1/tab1.component";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {Tab2Component} from "./tab2/tab2.component";

export const routes: Routes = [
  {
    path: 'tab1',
    component: Tab1Component,
  },
  {
    path: 'tab2',
    component: Tab2Component,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  }
];
