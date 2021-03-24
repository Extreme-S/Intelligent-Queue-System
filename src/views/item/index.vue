<template>
  <div class="app-container">
    <el-card>
      <el-row>
        <el-avatar size="large" :src="user.avatar"></el-avatar>
        <span>欢迎您 <strong>刘欢</strong> 您拥有 <strong>管理员</strong> 权限</span>
      </el-row>
    </el-card>
    <el-card style="margin-top:20px;height:70vh;">
      <el-tabs tab-position="left" style="height: 480px;">
        <el-tab-pane label="角色管理"><role-form /></el-tab-pane>
        <el-tab-pane label="项目管理"><exam-item /></el-tab-pane>
        <el-tab-pane label="部门管理">部门管理</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import RoleForm from './components/RoleForm'
import ExamItem from './components/ExamItem'
export default {
  components: {
    RoleForm,
    ExamItem
  },
  data() {
    return {
      user: {
        name: '刘欢',
        // role: this.roles.join(' | '),
        email: 'admin@test.com',
        avatar:
          'https://img01.sogoucdn.com/net/a/04/link?appid=100520040&url=https://i04piccdn.sogoucdn.com/f0bbf8c266c0e3e9' }
    }
  }
}
</script>

<style lang="scss" scoped>
.pag{
  margin-left: 100px;
  margin-top: 200px;
}
</style>
