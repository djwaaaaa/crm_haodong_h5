import { request } from '@/api/service'

export function GetList (query) {
  // const res = api.SYS_USER_LOGIN({ username, password,keep_login });
  /**
  * page		页数  非必填
  * limit		每页行数	非必填
  * order_code	订单编号	必填
  */
 console.log(query,888)
  return request({
    url: 'order.product/index',
    method: 'post',
    data: {
      page:query.current,
      limit:query.size,
      order_code:query.order_code
    }
  }).then(ret => {
    // console.log(ret,9999,ret.data)
    // ret.data= ret.data ? ret.data : {};
    // let obj = ret;
    // obj.data = {};
    // obj.data.current = query.current;
    // obj.data.size = query.size;
    // obj.data.total = ret.count;
    // let res = JSON.parse(JSON.stringify(ret.data));;
    // for (let i = 0; i < res.length; i++) {
    //   delete res[i].create_time;
    //   delete res[i].update_time;
    //   delete res[i].delete_time;
    // }
    // // console.log(res,99990000)
    // obj.data.records = res;
    // console.log(obj,99991111)
    // return obj
    ret.data= ret.data?ret.data:{};
    ret.data.current = query.current;
    ret.data.size = query.size;
    ret.data.total = ret.count;
    ret.data.records = ret.data;
    console.log(ret,22222,ret.data)
    return ret
  })
}
export function AddObj (obj) {
  return request({
    url: 'order.product/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return request({
    url: 'order.product/edit',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: 'order.product/delete',
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
