<template>
  <div>
    <el-card>
      <el-row gutter="20">
        <el-col :span="3" style=" line-height: 2.5;">体检项目</el-col>
        <el-col :span="7"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="7" offset="7">
          <el-button type="primary" @click="dialogFormVisible = true">添加项目</el-button>
          <!-- 添加医生对话框 -->
          <el-dialog title="添加项目" :visible.sync="dialogFormVisible">
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
        <el-table-column prop="itemId" label="体检项目编号"> </el-table-column>
        <el-table-column prop="itemName" label="项目名"> </el-table-column>
        <el-table-column prop="sec" label="所属科室"> </el-table-column>
        <el-table-column prop="room" label="体检室"> </el-table-column>
        <el-table-column prop="combo" label="所属套餐"> </el-table-column>
        <el-table-column prop="num" label="医生人数(人)"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="dialog = true">编辑</el-button>
            <!-- 编辑功能的抽屉 -->
            <el-drawer
              ref="drawer"
              title="体检项目信息修改"
              :visible.sync="dialog"
              direction="rtl"
              custom-class="demo-drawer"
            >
              <div class="drawer__content">
                <el-form :model="form">
                  <el-form-item label="体检编号" :label-width="formLabelWidth">
                    <el-input disabled autocomplete="off" style="width:50%;" value="TJXM010101"></el-input>
                  </el-form-item>
                  <el-form-item label="项目名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" style="width:50%;"></el-input>
                  </el-form-item>
                  <el-form-item label="所属科室" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择所属科室">
                      <el-option label="眼科" value="shanghai"></el-option>
                      <el-option label="口腔科" value="beijing"></el-option>
                      <el-option label="五官科" value="s3"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="体检室" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" style="width:50%;"></el-input>
                  </el-form-item>
                  <el-form-item label="所属套餐" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" style="width:50%;"></el-input>
                  </el-form-item>
                  <el-form-item label="医生人数" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" style="width:50%;"></el-input>
                  </el-form-item>
                </el-form>
                <el-col style="" offset="3">
                  <el-button @click="cancelForm">取 消</el-button>
                  <el-button type="primary" :loading="loading" @click="$refs.drawer.closeDrawer()">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
                </el-col>
              </div>
            </el-drawer>

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
      dialog: false,
      loading: false,
      dialogFormVisible: false,
      formLabelWidth: '80px',
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
      tableData: [{
        itemId: 'TJXM010101',
        itemName: '眼部检查',
        sec: '眼科',
        room: '体检中心106',
        combo: '无',
        num: '3'
      }, {
        itemId: 'TJXM010102',
        itemName: '口腔检查',
        sec: '口腔科',
        room: '体检中心108',
        combo: '无',
        num: '3'
      }, {
        itemId: 'TJXM010103',
        itemName: '五官检查',
        sec: '五官科',
        room: '体检中心102',
        combo: '无',
        num: '2'
      }],
      multipleSelection: []
    }
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true
          this.timer = setTimeout(() => {
            done()
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false
            }, 400)
          }, 2000)
        })
        .catch(_ => {})
    },
    cancelForm() {
      this.loading = false
      this.dialog = false
      clearTimeout(this.timer)
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

<style lang="scss" scoped>

</style>
