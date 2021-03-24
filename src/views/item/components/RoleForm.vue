<template>
  <div>
    <el-card>
      <el-row gutter="20">
        <el-col :span="3" style=" line-height: 2.5;">角色管理</el-col>
        <el-col :span="7"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="7" offset="7">
          <el-button type="success">查询</el-button>
          <el-button type="primary" @click="dialogFormVisible = true">添加医生</el-button>
          <!-- 添加医生对话框 -->
          <el-dialog title="添加医生" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="医生姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" style="width:50%;"></el-input>
              </el-form-item>
              <el-form-item label="职位" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" style="width:50%;"></el-input>
              </el-form-item>
              <el-form-item label="所在部门" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="所在部门">
                  <el-option label="眼病专科" value="d1"></el-option>
                  <el-option label="口腔科" value="d2"></el-option>
                  <el-option label="耳鼻喉科" value="d3"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="系统权限" :label-width="formLabelWidth">
                <el-select v-model="form.pri" placeholder="系统权限">
                  <el-option label="系统管理员" value="s1"></el-option>
                  <el-option label="管理员" value="s2"></el-option>
                  <el-option label="用户" value="s3"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary">确 定</el-button>
            </div>
          </el-dialog>

          <el-button type="info" style="margin-left:10px;">批量导出</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-top:10px">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%;"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="id" label="编号"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="post" label="职位" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="depart" label="所在部门" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="privilege" label="系统权限" show-overflow-tooltip> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :total="1" />
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {},
      tableData: [{
        id: 'TJZX012001',
        name: '刘欢',
        post: '主任',
        depart: '眼病专科',
        privilege: '管理员'
      }, {
        id: 'TJZX012002',
        name: '卢帅瑞',
        post: '医师',
        depart: '眼病专科',
        privilege: '用户'
      }, {
        id: 'TJZX012003',
        name: '许请松',
        post: '医师',
        depart: '口腔科',
        privilege: '用户'
      }, {
        id: 'TJZX012004',
        name: '刘佳宇',
        post: '医师',
        depart: '耳鼻喉科',
        privilege: '用户'
      }],
      multipleSelection: []
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
