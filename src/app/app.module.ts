import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {routes} from './routes';
import {Tab1Component} from './tab1/tab1.component';
import {Tab2Component} from './tab2/tab2.component';
import {TodoService} from './todo.service';
import { TodoComponent } from './todo/todo.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Tab1Component,
    Tab2Component,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
