import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
import Vueaxios from 'vue-axios';
Vue.use(Vueaxios, axios);

new Vue({
  render: h => h(App),
}).$mount('#app')
