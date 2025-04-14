import { createApp } from 'vue'
import App from './App.vue'
import Env from './env'
import VueGtag from 'vue-gtag'
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css'
import './assets/css/main.css'

const env = Env()
const nodeEnv = process.env.NODE_ENV

// Standard Vue 3 app initialization
const app = createApp(App)

// Use VueGtag for analytics if in production
if (nodeEnv === 'production' && env.google_analytics_id) {
  app.use(VueGtag, {
    config: { id: env.google_analytics_id }
  })
}

app.mount('#app')
