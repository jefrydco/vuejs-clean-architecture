import Vue from 'vue'

import App from './App.vue'
import AppButton from './components/AppButton.vue'

import store from './store'
import router from './router'
import './assets/tailwind.css'

Vue.config.productionTip = false
Vue.component('app-button', AppButton)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
