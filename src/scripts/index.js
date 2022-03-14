import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import '../styles/main.css';
import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes/plugins/parent-fit/ls.parent-fit.min';

library.add(faHeart, faUserCircle, farHeart);
dom.watch();

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
