import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'
// 状态
const state = {
  token: getToken(), //! 设置token的共享状态,初始化vuex的时候先重缓存中读取
  uerInfo: {}
}
// 修改状态
const mutations = {
  // ! 设置token
  setToken(state, token) {
    state.token = token //! 数据给到vuex
    setToken(token) // !同步token到缓存
  },
  // !删除缓存
  removeToken(state) {
    state.token = null // !删除vuex的token
    removeToken() //! 先清除 vuex  再清除缓存 vuex和 缓存数据的同步
  },
  // !设置用户信息
  setUserInfo(state, result) {
    // 更新一个对象 都是响应式的
    state.uerInfo = result
    // state.uerInfo = { ...result }
  },
  // !删除用户信息
  reomveUserInfo(state) {
    state.userInfo = {}
  }
}
//! 执行异步
const actions = {
  /**
   * @param {调用登录接口} context
   */
  async login(context, data) {
    // !调用api接口
    const result = await login(data) // !拿到token
    // 表示登录接口调用成功 也就是意味着你的用户名和密码是正确的
    // 现在有用户token
    // actions 修改state 必须通过mutations
    context.commit('setToken', result)
  },
  /**
   * @param {获取用户资料} context
   */
  async getUserInfo(context) {
    const result = await getUserInfo()
    // !获取用户基本详情,获取用户头像
    const baseInfo = await getUserDetailById(result.userId)
    // const obj = { ...baseInfo, ...result }//! 合并数据
    context.commit('setUserInfo', { ...baseInfo, ...result }) // 将整个的个人信息设置到用户的vuex数据中
    return result // 这里为什么要返回 为后面埋下伏笔
  },
  /**
   *
   * @param {退出登录} context
   */
  logout(context) {
    //! 删除token
    context.commit('removeToken')//! 不仅仅删除了vuex中的 还删除了缓存中的
    //! 删除用户资料
    context.commit('removeUserInfo')//! 删除用户信息
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
