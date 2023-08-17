// !权限拦截在路由器跳转 导航路由
import router from '@/router'
import store from '@/store' //! 和组件中的this.$store是一回事
import NProgress from 'nprogress' //! 引入一份进度条插件
import 'nprogress/nprogress.css' //! 引入进度条样式

const whiteList = ['/login', '/404'] //! 定义白名单  所有不受权限控制的页面
// !前置守卫
router.beforeEach(async(to, from, next) => {
  NProgress.start() // ?开启进度条
  if (store.getters.token) {
    // ?有token的时候才能获取资料
    // ?如果有/login就跳转到主页
    if (to.path === '/login') {
      next('/') // ? 跳转到主页
    } else {
      // ?只有放行的时候才回去获取资料，如果当前vuex中有用户id表示以及有资料不需要获取，没有id才去获取
      if (!store.getters.userId) {
        // ? 如果没有id才表示当前用户资料还没有获取过
        await store.dispatch('user/getUserInfo')
        // ?如果后续需要根据用户资料获取数据的话，这里必须变成同步
      }
      next() // ? 直接放行
    }
  } else {
    // !没有token
    if (whiteList.indexOf(to.path) > -1) {
      // ? 如果找到了 表示在在名单里面
      next()
    } else {
      next('/login') // ? 跳到登录页
    }
  }
  NProgress.done() // ?手动强制关闭一次 解决手动切换地址时 进度条不关闭的问题
})
// !后置守卫
router.afterEach(() => {
  NProgress.done() // ? 关闭进度条
})
