import loadView from './_loader';

import deckRoutes from './deck';

export default [
  /* system pages */
  // {
  //   path: '*', redirect: '/',
  // },

  /* view pages */
  {
    path: '/', component: loadView('home'),
  },
  ...deckRoutes,
];
