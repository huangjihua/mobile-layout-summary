import { createRouter, createWebHistory } from 'vue-router';
import rem from '../pages/rem';
import vw from '../pages/rem';
import vw_rem from '../pages/rem';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: rem },
    {
      path: '/vw',
      component: vw,
    },
    {
      path: '/vw_rem',
      component: vw_rem,
    },
  ],
});

export default router;
