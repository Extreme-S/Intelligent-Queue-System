<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input v-model="input" placeholder="用户登记号"></el-input>
        </el-col>

        <el-col :span="8" offset="3">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-col>

        <el-col :span="6" :offset="1">
          <el-button type="primary">查询信息</el-button>
          <el-button type="primary">批量导出</el-button>
        </el-col>
      </el-row>
    </el-card>

    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%;"
    >
      <el-table-column label="序号" type="index" :index="indexMethod"> </el-table-column>
      <el-table-column label="登记号" prop="id"> </el-table-column>
      <el-table-column label="姓名" prop="name"> </el-table-column>
      <el-table-column label="检查日期" prop="date"> </el-table-column>
      <el-table-column label="体检类型" prop="type"> </el-table-column>
      <el-table-column label="检查项目/套餐" prop="item"> </el-table-column>
      <el-table-column>
        <template slot="header" slot-scope="{}">
          <el-input v-model="search" size="mini" placeholder="请输入姓名" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="dialogFormVisible = true">查看</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <!-- 查看详情弹出框 -->
          <el-dialog title="检查信息详情" :visible.sync="dialogFormVisible">
            <el-form :model="form">

            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </template>
      </el-table-column>

    </el-table>
    <el-pagination
      style="float:bottom;"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="10"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      value1: '',
      tableData: [{
        id: 7,
        date: '2016-05-02',
        name: '埃尔虎',
        type: '个人体检',
        item: '眼科 等 3项'
      }, {
        id: 5,
        date: '2016-05-04',
        name: '阿法狗',
        type: '入职体检',
        item: '入职体检套餐2'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '屠洪刚',
        type: '个人体检',
        item: '心血管 等 5项'
      }, {
        id: 6,
        date: '2016-05-03',
        name: '杨海涛',
        type: '入职体检',
        item: '入职体检套餐1'
      }, {
        id: 4,
        date: '2016-05-03',
        name: '杨灿昱',
        type: '入职体检',
        item: '入职体检套餐1'
      }, {
        id: 2,
        date: '2016-05-03',
        name: '宋玉楼',
        type: '入职体检',
        item: '入职体检套餐1'
      }, {
        id: 1,
        date: '2016-05-03',
        name: '宇浩',
        type: '入职体检',
        item: '入职体检套餐1'
      }],
      search: ''
    }
  },
  methods: {
    indexMethod(index) {
      return index + 1
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'error',
          message: '无权限删除用户信息、请联系系统管理员操作'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
