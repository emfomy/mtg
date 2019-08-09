export default function (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}
