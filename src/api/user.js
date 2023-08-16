import request from '@/utils/request'

/**
 *
 * @param {登录接口} data
 * @returns
 */
export function login(data) {
  return request({
    url: '/sys/login', // 因为所有的接口都要跨域 表示所有的接口要带 /api
    method: 'post',
    data
  })
}
/**
 *
 * @param {获取用户的基本资料} token
 * @returns
 */
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

export function logout() {
}
