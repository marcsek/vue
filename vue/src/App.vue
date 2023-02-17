<script setup>
import { onMounted, reactive } from 'vue';

const state = reactive({ count: 0, name: '' });

function increment() {
  state.count++;
}

onMounted(() => {
  state.name = 'halo';
});
</script>

<template>
  <h4>{{ state.name }}</h4>
  <p>{{ state.count }}</p>
  <button @click="state.count++">Add</button>
  <input type="text" v-model="state.name" />
</template>
