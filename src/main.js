import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ola from '@/components/HelloWorld'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.component('Ola', ola);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
