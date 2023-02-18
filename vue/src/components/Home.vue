<script setup>
import { reactive, ref, watch } from 'vue';
import CharactersList from './CharactersList.vue';
import { useFetch } from '../composables/useFetch';

const baseUrl = 'https://rickandmortyapi.com/api/character';

const state = reactive({ count: 0, name: '' });
const url = ref(baseUrl);
const debounceTimeout = ref(null);

const { data, loading } = useFetch(url);

watch(
  () => state.name,
  name => {
    clearTimeout(debounceTimeout.value);
    debounceTimeout.value = setTimeout(() => {
      console.log(state.name);
      url.value = `${baseUrl}/?name=${state.name}`;
    }, 500);
  }
);

const onFilterSubmit = () => {
  url.value = `${baseUrl}/?name=${state.name}`;
};
</script>

<template>
  <label>
    Search by name
    <input v-model="state.name" type="text" />
  </label>
  <button @click="onFilterSubmit">Search</button>
  <CharactersList :list="data.results" :loading="loading" />
</template>
