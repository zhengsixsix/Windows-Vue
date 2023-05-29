import { createApp } from "vue";
import "@/assets/style/reset.css";
import App from "./App.vue";
import routers from "@/router";
import win11UI from "@/plugins";
import VueLazyload from "vue-lazyload";

createApp(App)
  .use(VueLazyload, { lazyComponent: true })
  .use(routers)
  .use(win11UI)
  .mount("#app");
