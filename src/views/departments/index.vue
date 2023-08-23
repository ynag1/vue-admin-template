<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 组织架构 -->
      <el-card class="tree-card">
        <!-- 结构内容 -->
        <tree-tools :tree-node="company" :is-root="true" />
        <!-- 树状图 -->
        <el-tree
          :data="departs"
          :props="defaultProps"
          :default-expand-all="true"
        >
          <!--  slot-scope="{ departs }"接收传递的插槽数据，data每个节点的数据对象 -->
          <tree-tools slot-scope="{ data }" :tree-node="data" />
        </el-tree>
        <!-- :default-expand-all="true" 默认打开树状图-->
      </el-card>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import TreeTools from './components/tree-tools.vue'
export default {
  name: 'Departments',
  components: { // 引入组件
    TreeTools
  },
  data () {
    return {
      company: { name: '江苏传智播客教育科技股份有限公司', manager: '负责人' },
      // defaultProps，默认为label字段，修改字段明去name找 props自定义明
      defaultProps: {
        label: 'name',
        children: 'children'
      },
      departs: [{ name: '总裁办', manager: '曹操', children: [{ name: '董事会', manager: '曹丕' }] },
      { name: '行政部', manager: '刘备' },
      { name: '人事部', manager: '孙权' }],
    }
  }
}

</script>

<style >
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
</style>
