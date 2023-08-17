// !社保
import Layout from '@/layout'

export default {
// !路由规则
  path: '/social', // 路由地址 一级路由
  name: 'social', //! 路由模式加name属性
  component: Layout,
  children: [{
    // !二级路由path为空的时候此时表示二级路由的默认路由
    path: '',
    component: () => import ('@/views/social'),
    meta: {
      title: '社保', //! 左侧导航的显示菜单
      icon: 'table'
    }
  }]
}
