<template>
  <div class="settingFullBox FullBox">
    <ToolBar>Settings</ToolBar>
    <main>
      <!-- 侧边栏star -->
      <div class="nav">
        <div class="accountMessage">
          <img src="@/assets/img/login/avatar.jpg" alt="" />
          <div class="detailMessage">
            <span>{{ store.getUsername }}</span>
            <span>Local Account</span>
          </div>
        </div>
        <div class="searchInput">
          <input type="text" />
        </div>
        <div class="navList">
          <ul>
            <li
              v-for="(item, index) in navList"
              :key="index"
              @click="toggle(item)"
            >
              <img :src="getSrcSetting(`${item}.webp`)" alt="" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="mainBody">
        <div class="title">{{ title }}</div>
        <MainBodyList :data="translateData" />
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
interface SettingDataITEM {
  desc?: string;
  icon?: string;
  name?: string;
  type: string;
}
import { reactive, ref } from "vue";
import ToolBar from "@/components/ToolBar/index.vue";
import useUserStore from "@/store/userStore";
import SettingData from "@/data/SettingData.json";
import MainBodyList from "./MainBodyList.vue";
import { getSrcSetting } from "@/utils/getSrc";
const store = useUserStore();
const title = ref("system");
const navList: string[] = [];
Object.keys(SettingData).forEach((item) => {
  navList.push(item);
});
const toggle = (item: string) => {
  title.value = item;
  changeData(item);
};

const translateData = reactive<Array<SettingDataITEM>>([]);
const changeData = (item: string) => {
  translateData.splice(0, translateData.length);
  translateData.push(...(SettingData as { [key: string]: any })[item]);
};
</script>
<style lang="less" scoped>
.settingFullBox {
  background-color: @myBlue;

  main {
    height: calc(100% - 30px);
    width: 100%;
    display: flex;
    flex-direction: row;
    .nav {
      display: flex;
      flex-direction: column;
      width: 17em;
      height: 100%;
      .accountMessage {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        width: 95%;
        height: 5em;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
        transition: 0.1s;
        img {
          width: 4em;
          border-radius: 2em;
          cursor: pointer;
        }
        &:hover {
          background-color: #e9ecf1;
        }
        .detailMessage {
          margin-left: 10px;
          span:nth-child(1) {
            display: block;
            font-size: 0.8em;
            font-weight: 700;
          }
          span:nth-child(2) {
            font-size: 0.6em;
            font-weight: 500;
          }
        }
      }
      .searchInput {
        width: 16em;
        height: 2em;
        margin: 10px;
        input {
          width: 100%;
          height: 100%;
          border-left: 0;
          border-top: 0;
          border-right: 0;
          border-bottom: 0.2px solid #2a6bc3;
          border-radius: 3px;
          &:focus {
            outline: none;
            border-bottom: 2px solid #2a6bc3;
          }
        }
      }
      .navList {
        height: 100%;
        overflow-y: scroll;
        ul {
          padding: 10px;
          padding-top: 0px;
          list-style: none;
          li {
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            height: 2em;
            border-radius: 5px;
            font-size: 0.9em;
            img {
              width: 1em;
              margin-left: 1em;
              margin-right: 1em;
            }
            &:hover {
              background-color: rgba(255, 255, 255, 0.8);
              cursor: pointer;
            }
          }
        }
      }
    }
    .mainBody {
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: 100%;
      height: 100%;
      margin-left: 2em;
      .title {
        font-size: 2em;
        font-weight: 400;
        padding: 0.5em 0 0.5em 0;
        margin: 0;
      }
    }
  }
}
</style>
