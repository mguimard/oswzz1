<script setup lang="ts">
import { defineProps, inject } from 'vue'
import MyService from '../MyService'
let props = defineProps(['contenu', 'temperature'])
let emits = defineEmits(['refroidi'])

let message = inject('message')

let s = MyService.Get()
</script>

<template>
  Message : {{ message }}
  <p>Je suis un {{ contenu }}, ma température est de {{ temperature }}</p>
  <button @click="$emit('refroidi', 1, 2, 3, 4)">Refroidir</button>
</template>
