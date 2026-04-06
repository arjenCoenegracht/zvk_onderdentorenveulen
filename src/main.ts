import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles.css';

const SITE_URL = 'https://zvk-onderdentorenveulen.be';
const DEFAULT_TITLE = 'ZVK Onder Den Toren Veulen | ODT | Zaalvoetbal in Heers';
const DEFAULT_DESCRIPTION =
  'Officiële website van ZVK Onder Den Toren Veulen uit Heers met spelers, sponsors, wedstrijden en clubinfo.';

const redirectPath = sessionStorage.getItem('redirectPath');

if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  window.history.replaceState(null, '', redirectPath);
}

const app = createApp(App);

app.use(router);

const ensureMeta = (selector: string, attribute: 'name' | 'property', value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  return element;
};

const ensureCanonical = () => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }

  return element;
};

router.afterEach((to) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : DEFAULT_TITLE;
  const description =
    typeof to.meta.description === 'string' ? to.meta.description : DEFAULT_DESCRIPTION;
  const canonicalPath = to.path;

  document.title = title;
  ensureMeta('meta[name="description"]', 'name', 'description').content = description;
  ensureMeta('meta[property="og:title"]', 'property', 'og:title').content = title;
  ensureMeta('meta[property="og:description"]', 'property', 'og:description').content = description;
  ensureMeta('meta[property="og:url"]', 'property', 'og:url').content = `${SITE_URL}${canonicalPath}`;
  ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title').content = title;
  ensureMeta('meta[name="twitter:description"]', 'name', 'twitter:description').content = description;
  ensureCanonical().href = `${SITE_URL}${canonicalPath}`;
});

const bootstrap = async () => {
  if (redirectPath) {
    await router.replace(redirectPath);
  }

  await router.isReady();
  app.mount('#app');
};

void bootstrap();
