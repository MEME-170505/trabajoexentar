import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddProduct from '../views/AddProduct.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddProduct },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
