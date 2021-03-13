<template>
  <div>
    <el-card class="doctor-card" shadow="always">
      <el-row>
        <el-col :span="5">
          <el-avatar shape="square" :size="100" fit="fill" :src="url" />
        </el-col>

        <el-col :span="8" class="doctor-info">
          <div>您好：刘欢医生 </div>
          <div>体检项目：眼部检查 </div>
          <div>平均体检时间：3'56''</div>
          <div>工作状态：工作中/离开</div>
        </el-col>

        <el-col :span="8" offset="3" class="doctor-info">
          <div>体检室：106</div>
          <div>所属科室：眼科</div>
          <el-button type="primary" style="float:right;margin-top:5px;">开始检查</el-button>
        </el-col>

      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>

<style lang="scss" scoped>
.doctor-card {
  height: 20vh;
  margin-top: 10px;
  margin-left: 20px;
}
.doctor-info {
  font-family: Arial;
  font-size: 18px;
  line-height: 1.7;
}
</style>
