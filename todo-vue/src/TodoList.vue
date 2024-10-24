<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getTodos, type Todo } from './Todo'

let todos = ref<Todo[]>([])

onMounted(async () => {
  todos.value = await getTodos()
  sort()
})

const sort = () => {
  todos.value = todos.value.sort((a, b) => (a.completed ? 1 : -1))
}
</script>

<template>
  <div v-if="todos.length === 0">Patienter ....</div>
  <p v-else>
    Completed : {{ todos.filter(t => t.completed).length }} / {{ todos.length }}
  </p>
  <ul>
    <li
      :class="{ completed: todo.completed }"
      v-for="todo in todos"
      :key="todo.id"
    >
      <label>
        <input type="checkbox" v-model="todo.completed" @change="sort" />
        <span>{{ todo.title }}</span>
      </label>
    </li>
  </ul>
</template>

<style>
.completed {
  text-decoration: line-through;
}
</style>
