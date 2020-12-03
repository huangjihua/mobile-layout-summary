import { createRouter, createWebHistory } from 'vue-router';
import rem from '../pages/rem';
import vw from '../pages/vw';
import vw_rem from '../pages/vw-rem';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    { name: 'rem', path: '/', component: rem },
    {
      name: 'vw',
      path: '/vw',
      component: vw,
    },
    {
      name: 'vw-rem',
      path: '/vw_rem',
      component: vw_rem,
    },
  ],
});

export default router;
