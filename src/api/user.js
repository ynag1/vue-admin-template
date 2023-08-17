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
/**
 *
 * @param {根据用户id获取用户详情} id
 * @returns{return request默认请求类型就是get}
 */
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}
