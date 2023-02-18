import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import './style.css';
import App from './App.vue';
import Home from './components/Home.vue';
import CharacterDetail from './components/CharacterDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/detail/:id', component: CharacterDetail, name: 'CharacterDetail' },
  ],
});

createApp(App).use(router).mount('#app');
