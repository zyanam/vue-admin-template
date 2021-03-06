import request from '@/utils/request'

export function login(data) {
  console.log(data)
  return request({
    url: '/vue-admin-template/user/login',
    // url: '/user/login/login',
    method: 'post',
    data
    // params: {
    //   usercode: data.username,
    //   password: data.password
    // }
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
