export interface Todo {
  completed: boolean
  title: string
  id: number
}

const URL = 'https://jsonplaceholder.typicode.com/todos'

export async function getTodos(): Promise<Todo[]> {
  let res = await fetch(URL)
  return await res.json()
}
