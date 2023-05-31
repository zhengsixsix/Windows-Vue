<template>
  <div class="deskTopFullBox">
    <div class="modalFrame"></div>
    <div class="deskTopIcons">
      <IconItem
        v-for="item in deskTopData"
        :key="item.posIdx"
        :icon="item.icon"
        :name="item.name"
        :data="item"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import IconItem from "./component/IconItem.vue";
import { deskTopData } from "@/data";
</script>
<style lang="less" scoped>
.deskTopFullBox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .deskTopIcons {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0.2em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    user-select: none;
  }
}
</style>
