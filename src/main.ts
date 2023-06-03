import { createApp } from "vue";
import "@/assets/style/reset.css";
import "@/assets/style/style.less";
import "@/assets/style/global.less";
import App from "./App.vue";
import routers from "@/router";
import win11UI from "@/plugins";
import VueLazyload from "vue-lazyload";
import store from "@/store";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

createApp(App)
  .use(VueLazyload, { lazyComponent: true })
  .use(routers)
  .use(win11UI)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
