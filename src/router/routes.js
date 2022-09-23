import layoutHeaderAside from '@/layout/header-aside'
import pm from './modules/pm'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)
const meta = { auth: true }
/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },

      // 演示页面




      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  },
  // {
  //   path: '/system',
  //   name: 'system',
  //   auth: true,
  //   component: layoutHeaderAside,
  //   redirect: { name: 'system-user' },
  //   children:[
  //     {
  //       path: 'user',
  //       name: 'system-user',
  //       meta: {
  //         title: '用户管理',
  //         auth: true
  //       },
  //       component: _import('system/user')
  //     },
  //     {
  //       path: 'role',
  //       name: 'system-role',
  //       meta: {
  //         title: '角色管理',
  //         auth: true
  //       },
  //       component: _import('system/role')
  //     },
  //     {
  //       path: 'resource',
  //       name: 'system-resource',
  //       meta: {
  //         title: '资源管理',
  //         auth: true
  //       },
  //       component: _import('system/resource')
  //     },
  //   ]
  // },
  // {
  //   path: '/productProcessManagement',
  //   name: 'productProcessManagement',
  //   meta,
  //   redirect: { name: 'productProcess' },
  //   component: layoutHeaderAside,
  //   children: [
  //     { path: 'productProcess', name: 'productProcess', component: _import('productProcessManagement/productProcess'), meta: { ...meta, title: '产品工序' } },
  //   ]
  // },
  // {
  //   path: '/pm',
  //   name: 'pm',
  //   meta,
  //   redirect: { name: 'pm-projectManagement' },
  //   component: layoutHeaderAside,
  //   children: [
  //     { path: 'projectManagement', name: 'pm-projectManagement', component: _import('pm/projectManagement'), meta: { ...meta, title: '项目管理' } },
  //   ]
  // },
  // {
  //   path: '/quotationManagement',
  //   name: 'quotationManagement',
  //   meta,
  //   redirect: { name: 'quotationManagement-projectManagement' },
  //   component: layoutHeaderAside,
  //   children: [
  //     { path: 'quotation', name: 'quotationManagement-projectManagement', component: _import('quotationManagement/quotation'), meta: { ...meta, title: '报价管理',cache:false} },
  //   ]
  // },
  // {
  //   path: '/productionOrderManagement',
  //   name: 'productionOrderManagement',
  //   meta,
  //   redirect: { name: 'productionOrderManagement-productionOrder' },
  //   component: layoutHeaderAside,
  //   children: [
  //     { path: 'productionOrder', name: 'productionOrderManagement-productionOrder', component: _import('productionOrderManagement/productionOrder'), meta: { ...meta, title: '生产订单',cache:false } },
  //   ],
  // },
  // {
  //   path: '/purchasingManagement',
  //   name: 'purchasingManagement',
  //   meta,
  //   redirect: { name: 'purchasingManagement-purchase' },
  //   component: layoutHeaderAside,
  //   children: [
  //     { path: 'purchase', name: 'purchasingManagement-purchase', component: _import('purchasingManagement/purchase'), meta: { ...meta, title: '采购管理' } },
      { path: '/purchasingManagement/contractDetail', name: 'purchasingManagement-contractDetail', component: _import('purchasingManagement/contractDetail'), meta: { ...meta,title: '采购合同' } },
  //   ]
  // },
  // {
  //   path: '/salesManagement',
  //   name: 'salesManagement',
  //   meta,
  //   redirect: { name: 'salesManagement-sales' },
  //   component: layoutHeaderAside,
  //   children: [
  //     { path: 'sales', name: 'salesManagement-sales', component: _import('salesManagement/sales'), meta: { ...meta, title: '销售管理',cache:false  } },
  //     { path: 'contractDetail', name: 'salesManagement-contractDetail', component: _import('salesManagement/contractDetail'), meta: { ...meta,title: '销售合同' } },
  //   ]
  // },
  // {
  //   path: '/financialAffairs',
  //   name: 'financialAffairs',
  //   meta,
  //   redirect: { name: 'financialAffairs-receivables' },
  //   component: layoutHeaderAside,
  //   children: [
  //     { path: 'receivables', name: 'financialAffairs-receivables', component: _import('financialAffairs/receivables'), meta: { ...meta, title: '应收结算' } },
  //     { path: 'payable', name: 'financialAffairs-payable', component: _import('financialAffairs/payable'), meta: { ...meta, title: '应付结算' } },
  //     { path: 'invoice', name: 'financialAffairs-invoice', component: _import('financialAffairs/invoice'), meta: { ...meta, title: '发票' } },
  //   ]
  // },
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
