import { request } from '@/api/service'
import { uniqueId } from 'lodash'
export function getPermissions () {
  return request({
    url: 'ajax/initAdmin',
    method: 'get'
  }).then(ret => {
    // 如果使用你自己的后端，需要在此处将返回结果改造为本模块需要的结构
    // 结构详情，请参考示例中打印的日志 ”获取权限数据成功：{...}“ （实际上就是“资源管理”页面中列出来的数据）
    console.log(supplementPath(ret.menuInfo),9966)
    return supplementPath(ret.menuInfo)
  })
}
function convertPath(href){
  console.log("href",href)
  switch (href){
    case "/admin/system.admin/index.html":
      console.log("用户管理")
      return "/system/user"
      break;
    default:
      return href
      break;
  }
}

function supplementPath (menu) {
  return menu.map(e => ({
    ...e,
    // path: "system/role",
    path: e.href || uniqueId('/d2-menu-empty-'),
    ...e.child ? {
      children: supplementPath(e.child)
    } : {
      children:[]
    },
    type:1,
    permission:null,
    name:convertComponent(e.href),
    component: e.pid ? convertComponent(e.href) : "layoutHeaderAside",
  }))
  console.log(menu,77777)
}

function convertComponent(component){
  if(component){
    return component.replace(".html","").replace("/admin/",'')
  }else{
    return null
  }
  
}
