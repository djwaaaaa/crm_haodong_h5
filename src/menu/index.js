import { uniqueId } from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath (menu) {
  console.log(menu,"菜单")
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

export const menuHeader = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
  {
    path: '/system',
    title: '系统管理',
    icon: 'folder-o',
    children: [
      { path: '/system/user', title: '用户管理' },
      { path: '/system/role', title: '角色管理' },
      { path: '/system/resource', title: '资源管理' },
    ]
  },
  {
    path: '/productProcessManagement',
    title: '产品工序',
    icon: 'folder-o',
    children: [
      { path: '/productProcessManagement/productProcess', title: '产品工序' },
    ]
  },
  {
    path: '/pm',
    title: '项目管理',
    icon: 'folder-o',
    children: [
      { path: '/pm/projectManagement', title: '项目管理' },
    ]
  },
  {
    title: '报价管理',
    icon: 'folder-o',
    path: '/quotationManagement',
    children: [
      { path: '/quotationManagement/quotation', title: '报价管理' },
    ]
  },
  {
    title: '生产订单管理',
    icon: 'folder-o',
    path: '/productionOrderManagement',
    children: [
      { path: '/productionOrderManagement/productionOrder', title: '生产订单' },
    ]
  },
  {
    title: '采购管理',
    icon: 'folder-o',
    path: '/purchasingManagement',
    children: [
      { path: '/purchasingManagement/purchase', title: '采购合同' },
    ]
  },
  {
    title: '销售管理',
    icon: 'folder-o',
    path: '/salesManagement',
    children: [
      { path: '/salesManagement/sales', title: '销售合同' }
    ]
  },
  {
    title: '财务管理',
    icon: 'folder-o',
    path: '/financialAffairs',
    children: [
      { path: '/financialAffairs/receivables', title: '应收结算' },
      { path: '/financialAffairs/payable', title: '应付结算' },
      { path: '/financialAffairs/invoice', title: '发票' },
    ]
  },
])

export const menuAside = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
  {
    path: '/system',
    title: '系统管理',
    icon: 'folder-o',
    children: [
      { path: '/system/user', title: '用户管理' },
      { path: '/system/role', title: '角色管理' },
      { path: '/system/resource', title: '资源管理' },
    ]
  },
  {
    path: '/productProcessManagement',
    title: '产品工序',
    icon: 'folder-o',
    children: [
      { path: '/productProcessManagement/productProcess', title: '产品工序' },
    ]
  },
  {
    path: '/pm',
    title: '项目管理',
    icon: 'folder-o',
    children: [
      { path: '/pm/projectManagement', title: '项目管理' },
    ]
  },
  {
    title: '报价管理',
    icon: 'folder-o',
    path: '/quotationManagement',
    children: [
      { path: '/quotationManagement/quotation', title: '报价管理' },
    ]
  },
  {
    title: '生产订单管理',
    icon: 'folder-o',
    path: '/productionOrderManagement',
    children: [
      { path: '/productionOrderManagement/productionOrder', title: '生产订单' },
    ]
  },
  {
    title: '采购管理',
    icon: 'folder-o',
    path: '/purchasingManagement',
    children: [
      { path: '/purchasingManagement/purchase', title: '采购合同' },
    ]
  },
  {
    title: '销售管理',
    icon: 'folder-o',
    path: '/salesManagement',
    children: [
      { path: '/salesManagement/sales', title: '销售合同' },
    ]
  },
  {
    title: '财务管理',
    icon: 'folder-o',
    path: '/financialAffairs',
    children: [
      { path: '/financialAffairs/receivables', title: '应收结算' },
      { path: '/financialAffairs/payable', title: '应付结算' },
      { path: '/financialAffairs/invoice', title: '发票' },
    ]
  },
])
