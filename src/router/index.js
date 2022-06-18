import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import SignIn from "../views/SignInFlow/SignIn";
import MyRequest from "../views/SignInFlow/Request";
import MyRecover from "../views/SignInFlow/Recover";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    //component: () =>
    //import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/SignIn",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/Request",
    name: "request",
    component: MyRequest,
  },
  {
    path: "/Recover",
    name: "recover",
    component: MyRecover,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
