<template>
  <div>
    <el-card class="user-card" shadow="always">
      <!-- 用户信心行 -->
      <el-row>
        <el-col :span="5">
          <el-avatar
            :span="10"
            shape="square"
            :size="100"
            :fit="fill"
            :src="url"
          ></el-avatar>
        </el-col>

        <!-- 右侧信息 -->
        <el-col :span="18">
          <el-row>
            <el-col :span="9">
              <div class="user-info-text"><strong>姓名:</strong> 王小虎</div>
              <div class="user-info-text"><strong>年龄:</strong> 32</div>
            </el-col>

            <el-col :span="9">
              <div class="user-info-text"><strong>婚否:</strong> 未婚</div>
              <div class="user-info-text"><strong>性别:</strong> 男</div>
            </el-col>
          </el-row>

          <el-row>
            <div class="user-info-text">
              <strong>身份证号：</strong>421002************
            </div>
          </el-row>
        </el-col>
      </el-row>

      <!-- 医院适配信息行 -->
      <el-divider content-position="left">受检者详细信息</el-divider>
      <el-row>
        <el-col :span="12">
          <p><strong>流水号：</strong>8</p>
          <p><strong>登记号：</strong>TJRY0102001</p>
          <p><strong>队列号：</strong>8</p>
          <p><strong>体检套餐：</strong>无</p>
          <p><strong>体检类型：</strong>个人体检</p>
        </el-col>
        <el-col :span="12">
          <p><strong>民族：</strong>汉族</p>
          <p><strong>身高：</strong>178 cm</p>
          <p><strong>体重：</strong>68 kg</p>
          <p><strong>视力：</strong>良好</p>
          <p><strong>既往病史：</strong>无</p>
        </el-col>
      </el-row>
      <el-input v-model="user.info" class="text-area" type="textarea" rows="10" placeholder="请输入检查结果"></el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      url:
        'https://i04piccdn.sogoucdn.com/aea970c68f08d679'
    }
  }
}
</script>

<style lang="scss" scoped>
.user-card {
  margin-top: 10px;
  margin-right: 20px;
  height: 86vh;
  position: relative;
}
.text-area {
  position: absolute;
  bottom: 20px;
  width: 94%;
}
.user-info-text {
  margin: 10px;
}
</style>
