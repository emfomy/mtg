import Vue from 'vue';

import axios from 'axios';

const http = axios.create();
http.defaults.retry = 4;
http.defaults.retryDelay = 1000;
http.defaults.timeout = 6000;

Vue.prototype.$http = http;
