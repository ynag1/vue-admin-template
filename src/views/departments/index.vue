<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 组织架构 -->
      <el-card class="tree-card">
        <!-- 结构内容 -->
        <el-row
          type="flex"
          justify="space-between"
          align="middle"
          style="height: 40px"
        >
          <el-col>
            <!-- 左侧 -->
            <span>江苏传智播客教育科技股份有限公司</span>
          </el-col>
          <el-col :span="4">
            <!-- 右侧 -->
            <el-row type="flex" justify="end">
              <el-col>负责人</el-col>
              <!-- 下拉菜单 -->
              <el-col>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    操作<i class="el-icon-arrow-down el-icon--right" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>添加子部门</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <!-- 树状图 -->
        <el-tree
          :data="departs"
          :props="defaultProps"
          :default-expand-all="true"
        >
          <!--  slot-scope="{ departs }"接收传递的插槽数据，data每个节点的数据对象 -->
          <el-row
            slot-scope="{ data }"
            type="flex"
            justify="space-between"
            align="middle"
            style="height: 40px; width: 100%"
          >
            <el-col>
              <!-- 左侧 -->
              <span>{{ data.name }}</span>
            </el-col>
            <el-col :span="4">
              <!-- 右侧 -->
              <el-row type="flex" justify="end">
                <el-col>{{ data.manager }}</el-col>
                <!-- 下拉菜单 -->
                <el-col>
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      操作<i class="el-icon-arrow-down el-icon--right" />
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <!-- 下拉选项 -->
                      <el-dropdown-item>添加子部门</el-dropdown-item>
                      <el-dropdown-item>编辑部门</el-dropdown-item>
                      <el-dropdown-item>删除部门</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-tree>
        <!-- :default-expand-all="true" 默认打开树状图-->
      </el-card>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Departments',
  data () {
    return {
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
