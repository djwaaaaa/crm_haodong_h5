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
    url: 'credit.receivable/index',
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
    ret.data.records = ret.data;
    return ret
  })
}
export function AddObj (obj) {
  return request({
    url: 'credit.receivable/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return request({
    url: 'credit.receivable/edit',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: 'credit.receivable/delete',
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
