import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
 get todos() {
    return this.todoService.todos;
  }

  constructor(
    private readonly todoService: TodoService
  ) {}

  todoInput = new FormControl();

  addTodo() {
    var keys = Object.keys(localStorage), i = 0, key;
    console.log(keys);
    if (this.todoInput.value === '' || this.todoInput.value === null) {
      if (keys !== []) {
        for (; key = keys[i]; i++) {
            console.log(key, localStorage.getItem(key));
              this.todoService.addTodo(localStorage.getItem(key) || "");
        }
      }
    } else {
      localStorage.setItem(i+"", this.todoInput.value);
      this.todoService.addTodo(this.todoInput.value);
      this.todoInput.setValue('');
    }

  }

  deleteTodo(todo: string) {
    var keys = Object.keys(localStorage),
              i = 0, key;
    for (; key = keys[i]; i++) {
        if (todo === localStorage.getItem(key)) {
          localStorage.removeItem(key);
        }
    }
    this.todoService.deleteTodo(todo);
  }
}
