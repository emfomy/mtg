import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

import { publicPath } from '@/../vue.config';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  base: publicPath,
  // mode: 'history',
});

const baseTitle = 'MTG';
router.beforeEach((to, from, next) => {
  let title = baseTitle;
  to.matched.forEach((item) => {
    if (item.meta.title) {
      title = `${item.meta.title} | ${title}`;
    }
  });
  document.title = title;
  next();
});

export default router;
