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
const emit = defineEmits(["changeTag"]);
const toAllApps = () => {
  emit("changeTag");
};
const openApp = (name: string) => {
  console.log(name);
};
</script>
<style lang="less" scoped>
.appList {
  font-size: 14px;
  .topNav {
    color: #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    font-weight: 700;
    margin: 10px 0;
    .elbutton {
      font-size: 12px;
      color: #333;
      padding: 5px 8px;
      border-radius: 3px;
      cursor: pointer;
      border: #b9ccef solid 1px;
      &:hover {
        background: rgb(199 217 240 / 90%);
      }
    }
  }
  .pinnedList {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 20px;
    & > div {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: rgb(255, 255, 255);
      }
      p {
        font-weight: 550;
        font-size: 0.5em;
        text-align: center;
        white-space: nowrap;
        color: #2f2f2f;
        margin-top: 5px;
      }
      img {
        width: 35px;
      }
    }
  }
  .recommendList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 20px 0px 40px;
    .recommendItem {
      width: 40%;
      height: 45px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding-left: 10px;
      border-radius: 4px;
      margin-top: 5px;
      cursor: pointer;
      &:hover {
        background: rgb(255, 255, 255);
      }
      div {
        text-align: left;
        margin-left: 5px;
        h4 {
          font-size: 12px;
          font-weight: 600;
          color: #555;
          margin-top: 12px;
          margin-bottom: 0;
        }
        p {
          padding-top: 0;
          font-size: 10px;
          color: #666;
          margin: 0;
        }
      }
      img {
        width: 35px;
      }
    }
  }
}
</style>
