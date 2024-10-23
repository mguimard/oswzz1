import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Todo } from './todo';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  count: WritableSignal<number> = signal(0);
  count2: WritableSignal<string> = signal('bla');

  private http = inject(HttpClient);

  async getTodos(): Promise<Todo[]> {
    return firstValueFrom(
      this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    );
  }

  constructor() {
    let i = 0;
    setInterval(() => {
      this.count.set(i++);
    }, 1000);

    setInterval(() => {
      this.count2.update((s) => s + 'a');
    }, 100);
  }
}
