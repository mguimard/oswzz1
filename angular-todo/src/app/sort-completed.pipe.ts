import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'sortCompleted',
  standalone: true,
})
export class SortCompletedPipe implements PipeTransform {
  transform(value: Todo[]): Todo[] {
    return value.sort((t) => (t.completed ? 1 : -1));
  }
}
