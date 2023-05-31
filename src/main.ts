import { createApp } from "vue";
import "@/assets/style/reset.css";
import "@/assets/style/style.less";
import "@/assets/style/global.less";
import App from "./App.vue";
import routers from "@/router";
import win11UI from "@/plugins";
import VueLazyload from "vue-lazyload";
import store from "@/store";

createApp(App)
  .use(VueLazyload, { lazyComponent: true })
  .use(routers)
  .use(win11UI)
  .use(store)
  .mount("#app");
