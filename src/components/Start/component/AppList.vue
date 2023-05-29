<template>
  <div class="appList">
    <div class="topNav">
      <P>Pinned</P>
      <button class="elbutton" @click.stop="toAllApps">
        All Apps <i class="el-icon--right"></i>
      </button>
    </div>
    <div class="pinnedList">
      <div
        v-for="(item, index) in pinnedData"
        :key="index"
        @click="openApp(item.name)"
      >
        <img :src="getSrcStartIcon(`${item.url}.png`)" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- 推荐app列表 -->
    <div class="topNav">
      <p>Recommend Projects</p>
    </div>
    <div class="recommendList">
      <div
        class="recommendItem"
        v-for="(item, index) in recommendData"
        :key="index"
      >
        <img :src="getSrcStartIcon(`${item.url}.png`)" alt="" />
        <div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import StartData from "@/data/StartData.json";
import { getSrcStartIcon } from "@/utils/getSrc";
let { pinnedData, recommendData } = StartData;
const toAllApps = () => {};
const openApp = (name: string) => {
  console.log(name);
};
</script>
<style lang="less" scoped>
.appList{}
</style>
