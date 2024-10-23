export default class TodoService {
  static async getTodos() {
    return await (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json();
  }
}
