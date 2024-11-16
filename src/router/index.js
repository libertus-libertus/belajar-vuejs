import { createMemoryHistory, createRouter } from 'vue-router'

import ListFoods from '../pages/ListFoods.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/', component: Contact },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;