import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
const TimeOut = 3600 //! 定义超时时间
import { getTimeStamp } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // request timeout
})

// !请求拦截器
service.interceptors.request.use(
  config => {
    // !需要统一去注入token
    if (store.getters.token) {
    // 如果token存在 注入token
    // !有token的情况下才去检查时间戳
      if (IsCheckTimeOut()) {
        // 为true表示时间过期
        store.dispatch('user/logout') // 登出操作
        // !跳转登录页
        router.push('/login')
        return Promise.reject(new Error('token超时'))
      }
      config.headers['Authorization'] = `Bearer ${store.getters.token}`
    }
    return config // 必须返回配置
  }, error => {
    return Promise.reject(error)
  }
)

// !响应拦截器
service.interceptors.response.use(
  response => {
    // axios默认加了一层data
    const { success, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
      return data
    } else {
      // 业务已经错误了 还能进then ? 不能 ！ 应该进catch
      Message.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  }, error => {
    Message.error(error.message) // 提示错误信息
    return Promise.reject(error) // 返回执行错误 让当前的执行链跳出成功 直接进入 catch
  }
)
// !是否超时  当前事时间-缓存时间是否大于时间差-TimeOut
function IsCheckTimeOut() {
  var currentTime = Date.now() // !当前时间戳
  var timeStamp = getTimeStamp()//! 缓存时间戳
  return (currentTime - timeStamp) / 1000 > TimeOut
}
export default service
