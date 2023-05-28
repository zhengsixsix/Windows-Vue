<template>
  <div class="desktop">
    <main></main>
    <footer>
      <taskBar />
    </footer>
  </div>
</template>
<script lang="ts" setup>
import taskBar from "@/components/taskBar/index.vue";
</script>
<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.desktop {
  height: 100vh;
  width: 100vw;
  background-size: 100% 100%;
  main {
    height: calc(100% - 48px);
    width: 100%;
    background-size: 100% 100%;
  }
  footer {
    height: 48px;
    width: 100%;
  }
}
</style>
