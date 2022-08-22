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
    url: 'order/index',
    method: 'post',
    data: {
      page:query.current,
      limit:query.size,
      project_code:query.project_code,
      contacts_name:query.contacts_name,
      customer_company:query.customer_company
    }
  }).then(ret => {
    ret.data= ret.data?ret.data:{};
    ret.data.current = query.current;
    ret.data.size = query.size;
    ret.data.total = ret.count;
    let res = ret.data;
    for (const key in res) {
       delete res[key].order_id
       delete res[key].contract_code;
       delete res[key].sign_date;
       delete res[key].sign_flag;
       delete res[key].create_time;
       delete res[key].update_time;
       delete res[key].delete_time
    }
    ret.data.records = res;
    console.log(777,ret)
    return ret
  })
}
export function AddObj (obj) {
  return request({
    url: 'order/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return request({
    url: 'order/edit',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: 'order/delete',
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
