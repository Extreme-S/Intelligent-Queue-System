<template>
  <el-row :gutter="10">
    <el-col :span="12">
      <doctor-card></doctor-card>
      <queue-card></queue-card>
    </el-col>
    <el-col :span="12">
      <user-card></user-card>
    </el-col>
  </el-row>
</template>

<script>
import DoctorCard from './components/DoctorCard'
import QueueCard from './components/QueueCard'
import UserCard from './components/UserCard'
export default {
  components: { DoctorCard, QueueCard, UserCard }
}
</script>

<style lang="scss" scoped></style>
