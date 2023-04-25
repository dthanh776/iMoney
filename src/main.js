import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import "./assets/style/tailwind.css";
import "./assets/style/global.css";

import { registerGlobalComponents } from "./ultis/import";

import { auth } from "@/configs/firebase";

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        registerGlobalComponents(app);

        app.use(router);
        app.mount("#app");
    }
});
