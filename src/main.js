import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'
import Head from './components/HeadBar.vue'
import router from './router'

createApp(Head).mount('#head')
createApp(App).use(router).mount('#App')
