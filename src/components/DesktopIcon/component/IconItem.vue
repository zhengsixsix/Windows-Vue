<template>
  <div class="deskTopIcon">
    <img :src="getSrcIcon(`${icon}`)" alt="" />
    <span>{{ name }}</span>
  </div>
</template>
<script lang="ts" setup>
import { getSrcIcon } from "@/utils/getSrc";

type DATA = {
  icon: string;
  name: string;
  componentName: string;
  posIdx: number;
};
defineProps<{
  name: string;
  icon: string;
  data: DATA;
}>();
</script>
<style lang="less" scoped>
.deskTopIcon {
  // z-index: 998;
  display: flex;
  width: 6em;
  height: 6em;
  margin: 0.5em;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 0.8em;
  transition: 0.1s;
  border-radius: 0.2em;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  img {
    width: 3em;
  }
  span {
    text-align: center;
    width: 100%;
    font-size: 0.7em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
