<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>我的信息</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb
          :image="user.avatar"
          :height="'100px'"
          :width="'100px'"
          :hoverable="false"
        >
          <div>Hello </div>
          {{ user.type }}
        </pan-thumb>
      </div>

      <div class="box-center">
        <div class="user-name text-center">{{ user.name }}</div>
        <div class="user-role text-center text-muted">
          {{ user.role | uppercaseFirst }}
        </div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header">
          <svg-icon icon-class="education" /><span>详细信息</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            医学博士，副主任医师，中国医疗保健国际交流促进会生殖医学分会青年委员会委员，
            中华医学会生殖医学会会员，上海市中西医结合学会生殖医学会会员。
          </div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <svg-icon icon-class="skill" /><span>大众评价</span>
        </div>
        <div class="user-bio-section-body">
          <div class="progress-item">
            <span>专业能力</span>
            <el-progress :percentage="82" />
          </div>
          <div class="progress-item">
            <span>医患关系</span>
            <el-progress :percentage="56" />
          </div>
          <div class="progress-item">
            <span>为人处世</span>
            <el-progress :percentage="49" />
          </div>
          <div class="progress-item">
            <span>好评率</span>
            <el-progress :percentage="98" />
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'

export default {
  components: { PanThumb },

  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '刘欢',
          type: '管理员',
          // role: this.roles.join(' | '),
          email: 'admin@test.com',
          avatar:
          'https://img01.sogoucdn.com/net/a/04/link?appid=100520040&url=https://i04piccdn.sogoucdn.com/f0bbf8c266c0e3e9'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
