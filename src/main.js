import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import WebDataRocks from 'webdatarocks'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(WebDataRocks)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
