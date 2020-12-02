import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
const _app = createApp(App);
_app.use(router);
_app.mount('#app');
