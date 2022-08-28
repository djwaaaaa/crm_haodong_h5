import { request } from '@/api/service'

export function GetList (query) {
  return request({
    url: 'technique/index/pid/'+query.nodeId,
    method: 'post',
    data: {
      page:query.current,
      limit:query.size,
    }
  }).then(ret => {
    console.log(ret,200,ret.data)
    ret.data= ret.data?ret.data:{};
    ret.data.current = query.current;
    ret.data.size = query.size;
    ret.data.total = ret.count;
    let res = ret.data;
    for (const key in res) {
       delete res[key].create_time;
       delete res[key].update_time;
       delete res[key].delete_time
    }
    ret.data.records = res;
    console.log(ret,300,ret.data)
    return ret
  })
}
export function AddObj (obj) {
  return request({
    url: 'technique/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return request({
    url: 'technique/edit',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: 'technique/delete',
    method: 'post',
    data: { id }
  })
}
export function GetCascadeData () {
  return request({
    url: '/select/cascadeData',
    method: 'get'
  })
}
