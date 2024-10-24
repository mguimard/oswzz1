<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type Card from './Card'
import COLORS from './Colors'
import Utils from './Utils'

// Refs
const gameOver = ref<boolean>(false)
const cards = ref<Card[]>([])
const current_cards = ref<Card[]>([])

// Game logic
const createNewGame = async () => {
  gameOver.value = false
  cards.value.length = 0
  current_cards.value.length = 0

  for (let i = 0; i < COLORS.length; i++) {
    await Utils.delay(50)
    cards.value.push(Utils.createCard(COLORS[i]))

    await Utils.delay(50)
    cards.value.push(Utils.createCard(COLORS[i]))
  }

  cards.value = Utils.shuffle(cards.value)
}

const reveal = async (card: Card) => {
  if (card.revealed || current_cards.value.length === 2) {
    return // nothing to do here
  }

  card.revealed = true
  current_cards.value.push(card)

  if (current_cards.value.length === 2) {
    if (current_cards.value[0].color !== current_cards.value[1].color) {
      await Utils.delay(1000)
      current_cards.value.forEach(c => (c.revealed = false))
    } else {
      checkGameOver()
    }
    current_cards.value.length = 0
  }
}

const checkGameOver = () => {
  gameOver.value = cards.value.filter(c => !c.revealed).length === 0
}

// Hooks
onMounted(createNewGame)

// Event handlers
const newGame = createNewGame

const resetGame = () => {
  cards.value.forEach(card => (card.revealed = false))
}

const revealGame = () => {
  cards.value.forEach(card => (card.revealed = true))
}
</script>

<template>
  <h1>Memory game</h1>

  <button @click="newGame">New game</button>
  <button @click="resetGame">Reset</button>
  <button @click="revealGame">Reveal</button>

  <p v-if="gameOver">GAME OVER !</p>

  <div class="container">
    <button
      class="card"
      v-for="card in cards"
      :class="{ revealed: card.revealed, gameOver: gameOver }"
      :style="{ background: card.revealed ? card.color : '' }"
      @click="() => reveal(card)"
    >
      {{ card.revealed ? '' : '🥚🐔' }}
    </button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  flex: 1 0 21%;
  margin: 5px;
  height: 100px;
  border: 1px solid gray;
  text-align: center;
  vertical-align: center;
  cursor: pointer;
  transition: background-color 1.5s ease;
}

.card.revealed {
  animation-duration: 0.5s;
  animation-name: cardFlip;
  animation-iteration-count: 1;
}

.card.revealed.gameOver {
  animation-duration: 1s;
  animation-name: gameOver;
  animation-iteration-count: infinite;
  transform: scale(0.2, 0.2);
}

@keyframes cardFlip {
  from {
    transform: scale(-1, 1);
  }

  to {
    transform: scale(1, 1);
  }
}

@keyframes gameOver {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
