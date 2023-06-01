<template>
  <lazy-component class="EdgeFullBox FullBox">
    <ToolBar>Edge</ToolBar>
    <main>
      <div class="edgeToolBar">
        <div class="addressBar">
          <div class="edgenavicon" @click="goBackURL">
            <img src="@/assets/img/icon/ui/left.png" alt="" />
          </div>
          <div class="edgenavicon" @click="goForwardURL">
            <img src="@/assets/img/icon/ui/right.png" alt="" />
          </div>
          <div class="edgenavicon">
            <img src="@/assets/img/icon/ui/refresh.png" alt="" />
          </div>
          <div class="edgenavicon" @click="goHome">
            <img src="@/assets/img/icon/ui/home.png" alt="" />
          </div>
          <div class="addCont">
            <input
              type="text"
              id="urlin"
              @keyup.enter="submitInput"
              :value="frameURL"
            />
            <div class="enter">
              <img
                src="@/assets/img/icon/ui/enter.png"
                alt=""
                @click="clickEnterBtn"
              />
            </div>
          </div>
          <div class="addUser">
            <img src="@/assets/img/icon/ui/google.png" alt="" />
          </div>
        </div>
        <div class="bookBar">
          <div
            class="bookhandle"
            v-for="(item, index) in EdgeDataArr"
            :key="index"
            :id="'book' + index"
            @click="clickWebsite(item.url)"
          >
            <div class="bookIcon">
              <img :src="getSrcIcon(`${item.icon}.png`)" alt="" />
            </div>
            <div class="bookText">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
      <div class="siteFrame">
        <iframe :src="frameURL" class="frame" frameborder="0"></iframe>
      </div>
    </main>
  </lazy-component>
</template>
<script lang="ts" setup>
import ToolBar from "@/components/ToolBar/index.vue";
import EdgeDataJson from "@/data/EdgeData.json";
import { getSrcIcon } from "@/utils/getSrc";
import { InputHTMLAttributes } from "vue";
const EdgeDataArr = EdgeDataJson.WebSitesData;
let frameURL = "https://cn.bing.com/"; // 页面URL
const historyURL: string[] = [];

// 跳转函数
const goTo = (url: string, mark: boolean) => {
  frameURL = url;
  if (!mark) historyURL.push(url);
};

const goBackURL = () => {
  if (historyURL.length > 0) {
    goTo(historyURL[length - 1], true);
  }
};
const goForwardURL = () => {
  const index = historyURL.indexOf(frameURL);
  if (index < frameURL.length - 1) {
    frameURL = historyURL[index + 1];
  }
};

// 回到主页
const goHome = () => {
  frameURL = "https://cn.bing.com/";
  historyURL.push(frameURL);
};

const submitInput = () => {
  let url = (
    document.getElementById("urlin")! as unknown as InputHTMLAttributes
  ).value;
  goTo(url, true);
};
// 地址栏点击跳转
const clickEnterBtn = () => {
  let url = (
    document.getElementById("urlin")! as unknown as InputHTMLAttributes
  ).value;
  goTo(url, false);
};
// 点击收藏夹，跳转
const clickWebsite = (url: string) => {
  console.log(url);

  goTo(url, false);
};
</script>
<style lang="less" scoped>
.EdgeFullBox {
  overflow: hidden;
  main {
    width: 100%;
    height: calc(100% - 30px);
    .edgeToolBar {
      height: 60px;
      width: 100%;
      padding: 5px 0 8px;
      background: @myBlue;
      .addressBar {
        display: flex;
        .edgenavicon {
          margin: 3px 8px 1px;
          img {
            height: 16px;
            width: 16px;
          }
        }
        .addCont {
          display: flex;
          width: 65%;
          padding: 3px 0 0 5px;
          input {
            width: 100%;
            height: 90%;
            border-radius: 15px;
            border: 0;
            background-color: @myGray;
            outline: none;
            padding: 0 10px;
          }
          .enter {
            margin-left: 5px;
            position: relative;
          }
          img {
            position: absolute;
            top: 2px;
            right: 7px;
            height: 18px;
            width: 18px;
            cursor: pointer;
          }
        }
        .addUser {
          padding: 3px 3px 0;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .bookBar {
        display: flex;
        width: 100%;
        .bookhandle {
          display: flex;
          padding: 2px 6px;
          align-items: center;
          cursor: pointer;
          .bookIcon {
            img {
              width: 20px;
              border-radius: 15px;
              padding: 3px 3px 0;
            }
          }
          .bookText {
            font-size: 14px;
          }
        }
      }
    }
    .siteFrame {
      overflow: hidden;
      flex-grow: 1;
      height: 100%;
      .frame {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
