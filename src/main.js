// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App'
import Env from './env'
import VueAnalytics from 'vue-analytics'
import { BootstrapVue3 } from 'bootstrap-vue-3'

const env = Env()
const nodeEnv = process.env.NODE_ENV
const app = createApp(App).mount('#app')

app.use(BootstrapVue3)

if (nodeEnv === 'production' && env.google_analytics_id) {
  app.use(VueAnalytics, { id: env.google_analytics_id })
}
