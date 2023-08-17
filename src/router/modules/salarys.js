// !工资
import Layout from '@/layout'

export default {
// !路由规则
  path: '/salarys', // 路由地址 一级路由
  name: 'salarys', //! 路由模式加name属性
  component: Layout,
  children: [{
    // !二级路由path为空的时候此时表示二级路由的默认路由
    path: '',
    component: () => import ('@/views/salarys'),
    meta: {
      title: '工资', //! 左侧导航的显示菜单
      icon: 'dashboard'
    }
  }]
}
