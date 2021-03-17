<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <user-card></user-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserCard from './components/UserCard'
export default {
  components: { UserCard },
  data() {
    return {
      user: {},
      activeTab: 'activity'
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        // name: this.name,
        // role: this.roles.join(' | '),
        // email: 'admin@test.com',
        // avatar: this.avatar
        name: '刘欢',
        // role: this.roles.join(' | '),
        email: 'admin@test.com',
        avatar:
          'https://img01.sogoucdn.com/net/a/04/link?appid=100520040&url=https://i04piccdn.sogoucdn.com/f0bbf8c266c0e3e9'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
