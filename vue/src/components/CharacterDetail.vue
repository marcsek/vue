<template>
  <div v-if="loading">Loading</div>
  <div>
    <img :src="data.image" alt="" />
    <p>{{ data.name }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useFetch } from '../composables/useFetch';
const baseUrl = 'https://rickandmortyapi.com/api/character';
const route = useRoute();

const { data, loading } = useFetch(`${baseUrl}/${route.params.id}`);
</script>
