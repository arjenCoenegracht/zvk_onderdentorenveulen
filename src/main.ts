import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles.css';

const redirectPath = sessionStorage.getItem('redirectPath');

if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  window.history.replaceState(null, '', redirectPath);
}

createApp(App).use(router).mount('#app');
