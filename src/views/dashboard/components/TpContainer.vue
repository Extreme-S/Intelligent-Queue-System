<template>
  <div>
    <div class="block">
      <el-carousel height="200px">
        <el-carousel-item v-for="item in items" :key="item">
          <el-image style="width: 900px; height: 200px" fit="fill" :src="item"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'https://i02piccdn.sogoucdn.com/d9aa37dc56b029f3',
        'https://i03piccdn.sogoucdn.com/a79442e48bbeb76f',
        'https://i02piccdn.sogoucdn.com/288def3603e9094b'
      ]

    }
  }
}
</script>

<style lang="scss" scoped>
  .is-selected {
    color: #1989FA;
  }
  </style>
