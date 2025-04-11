import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App'
import Env from './env'
import VueGtag from 'vue-gtag'
import { createBootstrap } from 'bootstrap-vue-next'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const env = Env()
const nodeEnv = process.env.NODE_ENV

// Standard Vue 3 app initialization
const app = createApp(App)

// Use BootstrapVueNext
app.use(createBootstrap())

// Use VueGtag for analytics if in production
if (nodeEnv === 'production' && env.google_analytics_id) {
  app.use(VueGtag, {
    config: { id: env.google_analytics_id }
  })
}

app.mount('#app')
