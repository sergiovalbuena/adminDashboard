import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeamView from "../views/TeamView.vue";
import SignIn from "../views/SignInFlow/SignIn";
import MyRequest from "../views/SignInFlow/Request";
import MyRecover from "../views/SignInFlow/Recover";
import * as netlifyIdentityWidget from "netlify-identity-widget";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/team",
    name: "team",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TeamView,
    //component: () =>
    //import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/request",
    name: "request",
    component: MyRequest,
  },
  {
    path: "/recover",
    name: "recover",
    component: MyRecover,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some((record) => {
    return record.meta.requiresAuth;
  });
  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
});

export default router;
