import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login/index.vue"),
  },
  {
    path: "/home",
    name: "Name",
    component: () => import("@/views/home/index.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
