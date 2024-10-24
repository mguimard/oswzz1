<script setup lang="ts">
import { ref } from 'vue'

const myRef = ref('blabal')
const pizzas = ref(['honey moon', 'bybye trump', 'red hot kipik'])
const new_pizza = ref('')

const remove = (pizza: string) => {
  pizzas.value = pizzas.value.filter(p => p !== pizza)
}

const ajoute = () => {
  pizzas.value.push(new_pizza.value)
  new_pizza.value = ''
}

const sort = () => {
  pizzas.value = pizzas.value.sort()
}
</script>

<template>
  <button @click="sort">Trier alphabetique</button>
  <form @submit.prevent="ajoute">
    <input
      type="text"
      placeholder="Nom de pizza"
      v-model="new_pizza"
      :sel-input="myRef"
    />
    {{ new_pizza }}
  </form>
  <ul>
    <li v-for="pizza in pizzas" :key="pizza">
      {{ pizza }}
      <button
        @click="
          () => {
            remove(pizza)
          }
        "
      >
        Manger
      </button>
    </li>
  </ul>
</template>
