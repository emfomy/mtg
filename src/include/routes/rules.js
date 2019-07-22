import loadView from './_loader';

export default [
  { path: '', redirect: '/rules/intro' },
  { path: 'intro', component: loadView('rules/intro'), meta: { title: '介紹' } },
  { path: 'main', component: loadView('rules/main'), meta: { title: '主要規則' } },
  { path: 'haunt', component: loadView('rules/haunt'), meta: { title: '作祟' } },
  { path: 'win', component: loadView('rules/win'), meta: { title: '獲勝' } },
  { path: 'glossary', component: loadView('rules/glossary'), meta: { title: '詞彙表' } },
];
