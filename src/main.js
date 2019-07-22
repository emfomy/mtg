import Vue from 'vue';

import './assets/scss/main.scss';

import './include/axios';
import './include/bootstrap';

import App from './App.vue';
import router from './include/router';

Vue.config.productionTip = false;

Vue.prototype.$publicPath = process.env.BASE_URL;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
