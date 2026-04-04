import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles.css';

const redirectPath = sessionStorage.getItem('redirectPath');

if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  window.history.replaceState(null, '', redirectPath);
}

const app = createApp(App);

app.use(router);

if (redirectPath) {
  await router.replace(redirectPath);
}

await router.isReady();

app.mount('#app');
