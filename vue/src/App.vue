<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <div id="content-wrapper">
    <router-view></router-view>
  </div>
</template>

<style scoped>
#content-wrapper {
  padding-top: 4rem;
}
</style>
