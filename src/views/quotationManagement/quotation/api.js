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
 console.log(query,888)
  return request({
    url: 'project.offer/index',
    method: 'post',
    data: {
      page:query.current,
      limit:query.size,
      offer_draw:query.offer_draw,
      project_name:query.project_name,
      project_code:query.project_code,
      customer_company:query.customer_company
    }
  }).then(ret => {
    console.log(ret,9999,ret.data)
    ret.data= ret.data?ret.data:{};
    ret.data.current = query.current;
    ret.data.size = query.size;
    ret.data.total = ret.count;
    let res = ret.data;
    for (const key in res) {
       delete res[key].province;
       delete res[key].customer_qq;
       delete res[key].customer_wechat;
       delete res[key].create_time;
       delete res[key].update_time;
       delete res[key].delete_time
    }
    ret.data.records = res;
    console.log(ret,"res")
    return ret
  })
}
export function AddObj (obj) {
  return request({
    url: 'project.offer/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return request({
    url: 'project.offer/edit',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: 'project.offer/delete',
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
