import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: string = '';

  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit();
  }

}
