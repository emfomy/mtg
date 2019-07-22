import loadView from './_loader';

export default [
  {
    path: '/deck/stasis',
    component: loadView('deck'),
    meta: { title: 'MonoBlue - Stasis' },
    props: { deck: 'monoblue-stasis-2' },
  },
  {
    path: '/deck/humility',
    component: loadView('deck'),
    meta: { title: 'MonoWhite - Humility' },
    props: { deck: 'monowhite-humility' },
  },
  {
    path: '/deck/graveyard',
    component: loadView('deck'),
    meta: { title: 'Black - Graveyard' },
    props: { deck: '09-07-19-black-graveyard' },
  },
];
