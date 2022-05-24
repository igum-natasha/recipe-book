import {Injectable} from "@angular/core";

@Injectable()
export class TodoService {
  private _todos: string[] = [];

  get todos() {
    return [...this._todos];
  }

  addTodo(title: string) {
    this._todos = [...this._todos, title];
  }

  deleteTodo(todo: string) {
    const index = this.todos.indexOf(todo);

    if (index === -1) {
      return;
    }

    this._todos = [...this.todos.slice(0, index), ...this.todos.slice(index+1)];
  }
}
