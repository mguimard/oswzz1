import Todo from "./Todo";

export default class TodoService {
  private static TODOS_URL: string =
    "https://jsonplaceholder.typicode.com/todos";

  static async getTodos(): Promise<Todo[]> {
    return await (await fetch(this.TODOS_URL)).json();
  }
}
