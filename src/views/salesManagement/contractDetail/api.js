import { request } from '@/api/service'

export function GetList (query) {
  // const res = api.SYS_USER_LOGIN({ username, password,keep_login });
  /**
  * page		页数  非必填
  * limit		每页行数	非必填
  * order_code	订单编号	必填
  */
  console.log(query,8887)
 // console.log(query,8887,this.$route.query.offerGuid)
  return request({
    url: 'contract.sale_product/index',
    method: 'post',
    data: {
      page:query.current,
      limit:query.size,
      sale_id:query.sale_id
    }
  }).then(ret => {
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
    return ret
  })
}
export function AddObj (obj) {
  return request({
    url: 'contract.sale_product/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return request({
    url: 'contract.sale_product/edit',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: 'contract.sale_product/delete',
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
