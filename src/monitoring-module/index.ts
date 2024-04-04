import { defineModule } from "@directus/extensions-sdk";
import ModuleComponent from "./module.vue";

export default defineModule({
  id: "doppler-monitoring",
  name: "Doppler Monitoring",
  icon: "box",
  routes: [
    {
      path: "",
      component: ModuleComponent,
    },
  ],
});
