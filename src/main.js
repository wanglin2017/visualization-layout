import { createApp } from "vue";
import App from "./App.vue";
// router
import router from "./router";
// element-ui
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
// base scss
import "./assets/scss/base.scss"

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
