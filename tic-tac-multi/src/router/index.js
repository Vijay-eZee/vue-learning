import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/PortfolioView.vue"),
    },
    {
      path: "/stocks",
      name: "stocks",
      component: () => import("../views/StocksView.vue"),
    },
    {
      path: "/tictac",
      name: "tictac",
      component: () => import("../views/TicTac.vue"),
    },
  ],
});

export default router;
