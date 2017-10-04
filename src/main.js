// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App'
import VueAnalytics from 'vue-analytics'
import Env from './env'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

const env = Env()
const nodeEnv = process.env.NODE_ENV

if (nodeEnv === 'production' && env.google_analytics_id) {
  Vue.use(VueAnalytics, { id: env.google_analytics_id })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },

  created () {
    window.document.title = env.page_title
  }
})
