import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
// 状态
const state = {
  token: getToken()//! 设置token的共享状态,初始化vuex的时候先重缓存中读取
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
  }
}
//! 执行异步
const actions = {
  async login(context, data) {
    // !调用api接口
    const result = await login(data) // !拿到token
    if (result.data.success) {
      // 表示登录接口调用成功 也就是意味着你的用户名和密码是正确的
      // 现在有用户token
      // actions 修改state 必须通过mutations
      context.commit('setToken', result.data.data)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
