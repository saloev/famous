import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// layouts
const MainLayout = () => import("@/layout/MainLayout.vue");

// pages
const Home = () => import("@/views/Home.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
