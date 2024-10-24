<script setup lang="ts">
import { provide, ref, type Ref } from 'vue'
import Pizzas from './components/Pizzas.vue'
import Tasse from './components/Tasse.vue'

provide(/* key */ 'message', /* value */ 'hello!')

const count: Ref<number, number> = ref(0)

const inc = () => {
  count.value++
}
const dec = () => {
  count.value--
}

const cafeFroid = (...args: any[]) => {
  debugger
  console.log(args)
  console.log('café froid')
}
</script>

<template>
  <h1>{{ 'Hello' }}</h1>

  <Tasse contenu="bière" temperature="2°C" />
  <Tasse contenu="café" temperature="70°C" @refroidi="cafeFroid" />

  <hr />

  <Pizzas />

  <p>Compteur : {{ count }}</p>
  <button @click="inc">Inc</button>
  <button v-on:click="dec">Dec</button>

  <p v-show="count >= 5">Vous avez cliqué au moins 5 fois, bravo</p>
  <p v-if="count >= 5">
    Vous avez cliqué au moins 5 fois, bravo (v-if version)
  </p>
  <p v-else>Vous avez pas assez cliqué</p>

  <p v-bind:id="`paragraph-${count}`">ceci est un p</p>
  <p :id="`other-paragraph-${count}`">ceci est un p</p>

  <p :id="count + '-toto'"></p>

  <p :class="{ 'gros-compteur': count > 5 }">COUCOU</p>
</template>

<style scoped>
.gros-compteur {
  color: red;
}
</style>
