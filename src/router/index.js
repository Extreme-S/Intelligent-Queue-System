import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // 工作台
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard', // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
    children: [{
      path: 'dashboard',
      name: 'Dashboard', // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
      component: () => import('@/views/dashboard/index'),
      meta: { title: '工作台', icon: 'dashboard' }
    }]
  },

  // 预约管理
  {
    path: '/reservation',
    component: Layout,
    redirect: '/reservation/info',
    name: 'Reservation',
    meta: { title: '预约管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'info',
        name: 'Info',
        component: () => import('@/views/table/index'),
        meta: { title: '预约信息', icon: 'table' }
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/tree/index'),
        meta: { title: '预约设置', icon: 'tree' }
      }
    ]
  },
  // 项目管理
  {
    path: '/item',
    component: Layout,
    alwaysShow: true,
    redirect: '/example/index',
    name: 'Item',
    meta: { title: '项目管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        name: 'ItemInfo',
        component: () => import('@/views/form/index'),
        meta: { title: '项目信息', icon: 'form' }
      },
      {
        path: 'setting',
        name: 'ItemSetting',
        component: () => import('@/views/form/index'),
        meta: { title: '项目设置', icon: 'form' }
      }
    ]
  },

  // 项目管理
  {
    path: '/record',
    component: Layout,
    alwaysShow: true,
    redirect: '/record/index',
    name: 'Record',
    meta: { title: '记录管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        name: 'RecordList',
        component: () => import('@/views/form/index'),
        meta: { title: '队列记录', icon: 'form' }
      }
    ]
  },

  // 个人设置
  {
    path: '/person',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/dashboard/index'),
      name: 'System', // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
      meta: { title: '个人设置', icon: 'dashboard' }
    }]
  },
  // 系统设置
  {
    path: '/system',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/dashboard/index'),
      name: 'System', // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
      meta: { title: '系统设置', icon: 'dashboard' }
    }]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
