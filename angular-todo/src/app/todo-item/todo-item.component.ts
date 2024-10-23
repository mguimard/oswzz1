import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input({ required: true }) todo!: Todo;
  @Output() onUpdated = new EventEmitter<void>();
}
