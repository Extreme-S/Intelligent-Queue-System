<template>
  <div>
    <el-card class="user-card" shadow="always">
      <!-- 头像行 -->
      <el-row>
        <el-col :span="5">
          <el-avatar :span="10" shape="square" :size="100" :fit="fill" :src="url"></el-avatar>
        </el-col>

        <el-col :span="13">
          <p><strong>姓名:</strong> 王小虎</p>
          <p>
            <span><strong>年龄:</strong> 32</span>
            <span style="float:right;"><strong>性别:</strong> 男</span>
          </p>
          <p>
            <span><strong>身份证:</strong> 421002******************</span>
          </p>
        </el-col>
      </el-row>

      <!-- 详细信息行 -->
      <div>

      </div>
      <el-input class="text-area" type="textarea" rows="10" placeholder="请输入检查结果"></el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://img01.sogoucdn.com/net/a/04/link?appid=100520040&url=https://i02piccdn.sogoucdn.com/dd791843f8534019'
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
</style>
