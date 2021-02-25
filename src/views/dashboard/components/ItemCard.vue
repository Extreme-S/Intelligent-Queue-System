<template>
  <el-card style="margin-top:10px;">
    <div slot="header" class="clearfix">
      <span>检查项目</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
      >设置</el-button>
    </div>

    <div class="user-bio">
      <div class="user-bio-section">
        <div class="user-bio-section-header">
          <span>眼科</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            体检眼科查视力、色觉、裂隙灯检查、眼底检查、眼压的测量、眼底、角膜内皮镜检查等.
            随着科技的发展和社会的进步,人们使用眼睛的频率越来越高,此时对眼睛的体检和保护显得十分重要
          </div>
        </div>
      </div>

      <div class="user-bio-section" style="margin-top:15px;">
        <div class="user-bio-section-header">
          <span>工作时间</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            周一至周五
            <div></div>
            上午9：00至下午17：00
          </div>
        </div>
      </div>
      <!-- 开始检查 -->
      <div style="text-align:center">
        <router-link :to="{ path: '/system' }">
          <el-button type="success" round>开始检查</el-button>
        </router-link>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'

export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: '',
          role: ''
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
  margin-top: 5px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    // padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 5px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
