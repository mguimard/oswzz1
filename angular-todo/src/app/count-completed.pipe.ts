import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'countCompleted',
  standalone: true,
})
export class CountCompletedPipe implements PipeTransform {
  transform(todos: Todo[] | null): number {
    return todos ? todos.filter((t) => t.completed).length : 0;
  }
}
