import Vue from 'vue'
import store from '@/store/index'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Base from '@/components/layouts/Base';

Vue.use(VueRouter)

const routes = [

  {path: '/', component: Base, children: [
      {path: 'admin/dashboard', name: 'Dashboard', meta: {title: '대시보드'}, component: () => import("@/views/admin/DashBoard")},
      {path: 'admin/system/users', name: 'Users', meta: {title: '사용자 관리'}, component:  () => import("@/views/admin/system/Users")},
      {path: 'admin/system/menus', name: 'Menus', meta: {title: '메뉴 관리'}, component:  () => import("@/views/admin/system/Menus")},

      {path: 'dev/roles', name: 'DevRoles', meta: {title: '권한관리'}, component:  () => import("@/views/developer/Roles")},
      {path: 'dev/programs', name: 'DevPrograms', meta: {title: '프로그램 관리'}, component:  () => import("@/views/developer/Programes")},
      {path: 'dev/menus', name: 'DevMenus', meta: {title: '메뉴 관리'}, component:  () => import("@/views/developer/Menus")}
  ]},
  {path: '/login', name: 'Login', component: Login},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to) => {
    console.log(to)
    Vue.nextTick(() => {
        store.commit('setPageTitle', to.meta.title)
    });
});

export default router
