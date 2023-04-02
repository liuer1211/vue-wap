import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

const routes =  
  [{
    path: '/home',
    component: () => import('../pages/home')
  },
  {
    path: '/user',
    component: () => import('../pages/user')
  },
  {
    path: '/login',
    component: () => import('../pages/login')
  },
  {
    path: '/',
    redirect: '/home'
  }];

const router = new VueRouter(
  {
    routes,
  }
)

export default router;
