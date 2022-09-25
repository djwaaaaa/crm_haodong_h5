import { request } from '@/api/service'

export function GetList (query) {
  // const res = api.SYS_USER_LOGIN({ username, password,keep_login });
  /**
  * page		页数  非必填
  * limit		每页行数	非必填
  * offer_draw	报价编号	非必填
  * project_name	项目名称	非必填
  * project_code	项目编号	非必填
  * customer_company	客户公司	非必填
  */
  return request({
    url: 'system.admin/index',
    method: 'post',
    data: {
      page:query.current,
      limit:query.size,
    }
  }).then(ret => {
    console.log(ret,9999,ret.data)
    ret.data= ret.data?ret.data:{};
    ret.data.current = query.current;
    ret.data.size = query.size;
    ret.data.total = ret.count;
    let res = ret.data;
    for (const key in res) {
       delete res[key].update_time;
       delete res[key].delete_time;
    }
    ret.data.records = res;
    return ret
  })
}
export function AddObj (obj) {
  return request({
    url: 'system.admin/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  console.log(obj,999999)
  for (const key in obj) {
    console.log(obj,777777)
     delete obj.create_time;
     delete obj.login_num;
     delete obj.sort;
     delete obj.status;
  }
  console.log(obj,9999992222)
  return request({
    url: 'system.admin/edit',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: 'system.admin/delete',
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
