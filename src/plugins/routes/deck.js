import loadView from './_loader';

export default [
  {
    path: '/deck/stasis',
    component: loadView('deck/stasis'),
    meta: { title: 'MonoBlue - Stasis' },
  },
  {
    path: '/deck/humility',
    component: loadView('deck/humility'),
    meta: { title: 'MonoWhite - Humility' },
  },
  {
    path: '/deck/graveyard',
    component: loadView('deck/graveyard'),
    meta: { title: 'Black - Graveyard' },
  },
];
