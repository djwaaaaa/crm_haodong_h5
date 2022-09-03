import { request } from '@/api/service'
const apiPrefix = '/permission/manager/resource'
export function GetList (query) {
  return request({
    url: 'system.menu/index',
    method: 'get',
    params: query
  }).then(ret => {
    let res = ret.data;
    for (const key in res) {
       delete res[key].create_time;
       delete res[key].update_time;
       delete res[key].delete_time
    }
    ret.data = res;
    return ret
  })
}
export function GetTree (query) {
  return request({
    url: 'system.menu/index',
    method: 'get',
    params: query
  }).then(ret => {
    let item = [];
    let list = [];
    for (let i = 0; i < ret.data.length; i++) {
      delete ret.data[i].create_time;
      delete ret.data[i].update_time;
      delete ret.data[i].delete_time;
      if(ret.data[i].pid == 0){
        ret.data[i].children = [];
        item.push(ret.data[i]);
      }else{
        list.push(ret.data[i]);
      }
    }
    for (let j = 0; j < list.length; j++) {
      for (let k = 0; k < item.length; k++) {
        if(list[j].pid == item[k].id){
          item[k].children.push(list[j]);
        }
      }
    }
    ret.data = item;
    return ret;
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
    url: 'system.menu/edit',
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
