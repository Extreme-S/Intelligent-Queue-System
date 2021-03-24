<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20" style="height:100%;">
        <el-col :span="6">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :gutter="20">
          <el-row>
            <el-card> <tp-container /> </el-card>
          </el-row>

          <el-row :gutter="20">
            <!-- 项目信息 -->
            <el-col :span="8"><item-card /></el-col>
            <!-- 图标信息 -->
            <el-col :span="16">
              <div class="chart-wrapper">
                <div>体检人数比例直方图</div>
                <bar-chart />
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import TpContainer from './components/TpContainer'
import ItemCard from './components/ItemCard'
import BarChart from './components/BarChart'

export default {
  name: 'Profile',
  components: { UserCard, TpContainer, ItemCard, BarChart },
  data() {
    return {
      user: {},
      activeTab: 'activity'
    }
  },
  computed: {
    ...mapGetters(['name', 'avatar', 'roles'])
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

<style lang="scss" scoped>
.chart-wrapper {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
}
</style>
