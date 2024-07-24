import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);

// 动态加载 features 目录中的所有 Vue 组件
const featuresContext = require.context('@/features', true, /\.vue$/);

const routes = featuresContext.keys().map(filePath => {
  const pathParts = filePath.split('/');
  const componentName = pathParts[pathParts.length - 1].replace('.vue', '');
  const featureName = pathParts[pathParts.length - 2];
  return {
    path: `/${featureName.toLowerCase()}/${componentName.toLowerCase()}`,
    name: `${featureName}-${componentName}`,
    component: featuresContext(filePath).default,
    meta: { requiresAuth: true }  // 添加 meta 信息，用于路由守卫检查
  };
});

const router = new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    },
    ...routes,
    {
      path: '*',
      redirect: '/'
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.dispatch('autoLogin'); // 尝试自动登录

  const { username, token, lastActionTime, timeout } = store.state;
  const currentTime = Date.now();

  if (username && token) {
    if (currentTime - lastActionTime > timeout) {
      store.dispatch('logout');
      next('/login');
    } else {
      store.dispatch('updateActionTime');
      next();
    }
  } else {
    if (to.path !== '/login') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router;
