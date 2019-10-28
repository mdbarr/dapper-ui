import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => { return import('./views/Home.vue'); }
    },
    {
      path: '/login',
      name: 'login',
      component: () => { return import('./views/Login.vue'); }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (!store.state.loggedIn && to.name !== 'login') {
    return next({ path: '/login' });
  }
  return next();
});

export default router;
