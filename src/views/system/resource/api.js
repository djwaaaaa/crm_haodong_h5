import { request } from '@/api/service'
const apiPrefix = '/permission/manager/resource'
export function GetList (query) {
  return request({
    url: 'system.menu/index',
    method: 'get',
    params: query
  })
}
export function GetTree (query) {
  return request({
    url: 'system.menu/index',
    method: 'get',
    params: query
  })
}

export function AddObj (obj) {
  return request({
    url: 'system.menu/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return request({
    url: 'system.menu/update',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: 'system.menu/delete',
    method: 'post',
    params: { id }
  })
}

export function GetObj (id) {
  return request({
    url: apiPrefix + '/info',
    method: 'get',
    params: { id }
  })
}
