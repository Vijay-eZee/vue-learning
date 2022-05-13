import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
import InjectComp from "./plugins/InjectComp.plugin";
const app = createApp(App);
app.use(InjectComp);
app.use(router);

app.mount("#app");
