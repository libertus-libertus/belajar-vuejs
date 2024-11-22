import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ListProduk from "../views/ListProduk.vue";
import Cart from "../views/Cart.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/list-produk", name: "ListProduk", component: ListProduk },
  { path: "/cart", name: "Cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
