// main.js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css';
import typingEffect from './directives/TypingEffect';

// 폰트 어썸
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// 아이콘 라이브러리에 'fas' 아이콘 추가
library.add(fas);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon); // 폰트어썸
app.directive('typing', typingEffect)
app.mount('#app')
