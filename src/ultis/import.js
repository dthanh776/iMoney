import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("../layout/authLayout"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("../layout/defaultLayout"))
  );
}
