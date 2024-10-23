import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { AsyncPipe } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CountCompletedPipe } from '../count-completed.pipe';
import { SortCompletedPipe } from '../sort-completed.pipe';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    AsyncPipe,
    TodoItemComponent,
    CountCompletedPipe,
    SortCompletedPipe,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];

  service = inject(TodoService);

  myEffect = effect(() => {
    console.log(`The count is: ${this.service.count()}`);
    //console.log(`The count2 is: ${this.service.count2()}`);
  });

  myEffect2 = effect(() => {
    console.log('will be ran only once');
  });

  myEffect3 = effect(() => {
    console.log('count2', this.service.count2());
  });

  async ngOnInit() {
    this.todos = await this.service.getTodos();
  }

  count() {
    return this.todos.filter((todo) => todo.completed).length;
  }

  refresh() {
    //this.todos = [...this.todos];
  }

  ngOnDestroy() {
    this.myEffect.destroy();
  }
}
