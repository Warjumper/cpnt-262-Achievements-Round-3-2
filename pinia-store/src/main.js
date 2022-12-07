// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// import './assets/main.css'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import {createPinia} from 'pinia';

const app =createApp(App);
app.use(createPinia());
app.mount('#app');
