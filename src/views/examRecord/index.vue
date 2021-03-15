<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>

        <el-col :span="6">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>

        <el-col :span="6">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>

        <el-col :span="3" :offset="2">
          <el-button type="primary">查询信息</el-button>
        </el-col>
      </el-row>
    </el-card>

  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
