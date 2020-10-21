import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '@/views/Home'

Vue.use(VueRouter)

/**
 * hidden:            不在侧边栏显示 meta里还有一个hidden
 * noLogin：          不需要登录
 * defaulNeedrefresh
 * defaultActive
 * 
 */
const routes = [
  { path: '/login', name: 'login', hidden: true, meta: { title: '登录', noLogin: true }, component: () => import('@/views/Login') },
  { path: '/404', name: '404', hidden: true, meta: { title: '404', noLogin: true }, component: () => import('@/views/404') },
  { path: '*', hidden: true, redirect: { path: '/404' } },
  {
    path: '/',
    component: Home,
    name: '首页',      
    iconCls: 'iconfont iconicon_xinyong_xianxing_jijin-154 menu-icon',
    leaf: true,             //菜单栏一个节点
    redirect: '/company-data/index',
    children:[
      { path: '/company-data/index', name: '企业列表', meta: { title: '企业列表' }, component: () => import('../views/CompanyData/Index') }
    ]
  },
  {
    path: '/personal-data',
    component: Home,
    name: '首页',
    iconCls: 'iconfont iconicon_xinyong_xianxing_jijin-154 menu-icon',
    leaf: true,
    children: [
      {path: '/personal-data/index', name: '个人列表', meta: { title: '个人列表' }, component: () => import('../views/PersonalData/index')}
    ]
  },
  {
    path: '/social-data',
    component: Home,
    name: '缴纳社保企业',
    iconCls: 'iconfont iconicon_xinyong_xianxing_jijin-154 menu-icon',
    leaf: true,
    children: [
      {path: '/social-data/index', name: '缴纳社保企业', meta: { title: '缴纳社保企业' }, component: () => import('../views/SocialData/index')},
      {path: '/social-data/detail', name: '企业详情', meta: { title: '企业详情' }, component: () => import('../views/SocialData/detail')},
    ]
  },
  {
    path: '/social-people',
    component: Home,
    name: '缴纳社保人员',
    iconCls: 'iconfont iconicon_xinyong_xianxing_jijin-154 menu-icon',
    leaf: true,
    children: [
      {path: '/social-people/index', name: '缴纳社保人员', meta: { title: '缴纳社保人员' }, component: () => import('../views/SocialPeople/index')},
      {path: '/social-people/detail', name: '人员详情', meta: { title: '人员详情' }, component: () => import('../views/SocialPeople/detail')},
    ]
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.hidden && to.meta.defaulNeedrefresh) {
    to.meta.defaultActive = from.fullPath
  }
  next()
  // if(!store.state.token && !to.meta.noLogin) {
  //     alert('请您先登录')
  //     next('/login')
  // } else {
  //     next()
  // }
})

router.afterEach((to, from) => {
  let title = to.meta.title
  if (title) document.title = title
})

export default router
