import Vue from 'vue';

import './assets/scss/main.scss';

import './plugins/axios';
import './plugins/bootstrap';

import App from './App.vue';
import router from './plugins/router';

Vue.config.productionTip = false;

Vue.prototype.$publicPath = process.env.BASE_URL;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
