import { createApp } from "vue";
import "@/assets/style/reset.css";
import App from "./App.vue";
import routers from "@/router";
import win11UI from "@/plugins";

createApp(App).use(routers).use(win11UI).mount("#app");
