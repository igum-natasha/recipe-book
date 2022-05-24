import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   get todos() {
//     return this.todoService.todos;
//   }
//
//   constructor(
//     private readonly todoService: TodoService
//   ) {}
//
//   todoInput = new FormControl();
//
//   addTodo() {
//     this.todoService.addTodo(this.todoInput.value);
//     this.todoInput.setValue('');
//   }
//
//   deleteTodo(todo: string) {
//     this.todoService.deleteTodo(todo);
//   }
}
