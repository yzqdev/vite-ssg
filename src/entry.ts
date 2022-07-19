import { ViteSSG } from "vite-ssg";
import routes from "virtual:generated-pages";
import App from "./App.vue";
console.log(routes);
 
export const createApp = ViteSSG(App, { routes: routes });
