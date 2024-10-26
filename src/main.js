// main.js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css';
import typingEffect from './directives/typingEffect'

const app = createApp(App)
app.directive('typing', typingEffect)
app.mount('#app')