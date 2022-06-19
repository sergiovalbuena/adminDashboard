import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

createApp(App).use(store).use(router).mount("#app");

//Initialize Netifly Identity
netlifyIdentityWidget.init();

//Initialize GoTrue JS for Netlify
export const auth = new GoTrue({
  APIUrl: "https://lataqueria-admin.netlify.app/.netlify/identity",
  setCookie: true,
});
