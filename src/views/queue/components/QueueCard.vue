<template>
  <div>
    <el-card class="queue-card" shadow="always">
      <div slot="header" class="clearfix">
        <span class="room-status">诊室状态:医生离开</span>
        <el-input class="search-input" placeholder="搜索病人信息">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 排队队列 -->
      <div>
        <el-table :data="tableData" style="width: 100%;height:40vh;">
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="sex" label="性别"> </el-table-column>
          <el-table-column prop="age" label="年龄"> </el-table-column>
          <el-table-column prop="status" label="状态"> </el-table-column>
        </el-table>
      </div>
      <!-- 操作栏 -->
      <el-row class="button-row">
        <el-button type="warning">转诊</el-button>
        <el-button type="primary">提交</el-button>
        <el-button type="success">叫号下一位</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '王小虎',
          sex: '男',
          age: '32',
          status: '等待中'
        },
        {
          name: '王小虎',
          sex: '男',
          age: '32',
          status: '等待中'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.queue-card {
  margin-top: 10px;
  margin-left: 20px;
  height: 65vh;
}
.search-input {
  width: 400px;
  float: right;
}
.button-row {
  float: right;
  margin-top: 10px;
}
.room-status {
  font-family: Arial;
  font-size: 18px;
  line-height: 2;
}
</style>
