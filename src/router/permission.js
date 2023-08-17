// !权限管理
import Layout from '@/layout'

export default {
// !路由规则
  path: '/permission', // 路由地址 一级路由
  name: 'permission', //! 路由模式加name属性
  component: Layout,
  children: [{
    // !二级路由path为空的时候此时表示二级路由的默认路由
    path: '',
    component: () => import ('@/views/permission'),
    meta: {
      title: '权限管理'//! 左侧导航的显示菜单
    }
  }]
}
