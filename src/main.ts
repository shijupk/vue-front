import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//require("@/assets/normalize.css");
//require("@/assets/milligram.css");

createApp(App).use(store).use(router).mount("#app");
