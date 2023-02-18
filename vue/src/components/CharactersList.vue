<script setup>
const props = defineProps(['list', 'loading']);
</script>

<template>
  <ul>
    <p v-if="loading">loading</p>
    <li v-else v-for="char in list">
      <router-link :to="`detail/${char.id}`">
        <img :src="char.image" alt="" />
        <p>{{ char.name }}</p>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4rem;
}

ul li {
  padding: 1rem;
  border-radius: 1rem;
  background-color: #151515;
}

li img {
  width: 150px;
  height: 150px;
}

li p {
  margin: 0;
}
</style>
