<template>
  <div class="taskbar">
    <div class="tsleft">
      <Popup dir="bottom">
        <leftPane />
        <template #reference>
          <div class="taskbarBtn" id="widget">
            <img src="@/assets/img/icon/widget.png" alt="" id="startMenuImg" />
          </div>
        </template>
      </Popup>
    </div>
    <div class="center">
      <Popup dir="bottom" v-for="item in tsTop" :key="item">
        <component :is="item.component.value" />
        <template #reference>
          <div id="taskMenu" class="taskbarBtn" @click="setIcon(item.name)">
            <img :src="getSrcIcon(item.icon)" :id="`${item.icon}Img`" alt="" />
          </div>
        </template>
      </Popup>
      <div
        class="taskbarBtn"
        v-for="item in taskBarData"
        :key="item.name"
        :id="item.name"
        @click="showTaskerbarPanel(item.name)"
      >
        <img :src="getSrcIcon(`${item.icon}`)" :id="`${item.name}Img`" />
      </div>
    </div>
    <div class="right">
      <Popup dir="bottom">
        <runninngApps />
        <template #reference>
          <div class="up fcc">
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'chevron-up']" />
            </div>
          </div>
        </template>
      </Popup>

      <Popup dir="bottom">
        <template #reference>
          <div class="wf">
            <ul class="fcc">
              <li><img src="@/assets/img/icon/ui/wifi.png" alt="" /></li>
              <li><img src="@/assets/img/icon/ui/audio3.png" alt="" /></li>
            </ul>
          </div>
        </template>
      </Popup>

      <Popup dir="bottom">
        <template #reference>
          <div class="data fcc">
            <div class="systemTime">
              <div>
                {{
                  time.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                  })
                }}
              </div>
              <div>
                {{
                  time.toLocaleDateString("en-US", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "numeric",
                  })
                }}
              </div>
            </div>
          </div>
        </template>
      </Popup>
    </div>
  </div>
</template>
<script lang="ts" setup>
import runninngApps from "../runninngApps/index.vue";
import { COMPONENT } from "@/type/UTILSTYPE";
import leftPane from "../leftPane/index.vue";
import { taskBarBottomPop, taskBarData } from "@/data/index.ts";
import { getSrcIcon } from "@/utils/getSrc";
import { ref } from "vue";
import { showBox, hideBox } from "@/utils";
interface TSTOPITEM {
  component: COMPONENT;
  icon: string;
  way: string;
  name: string;
}
type TSTop = Array<TSTOPITEM>;
const time = new Date();
const tsTop: TSTop = taskBarBottomPop;
const isShow = ref("");
const setIcon = (name: string) => {
  isShow.value = name;
};
const showTaskerbarPanel = (e: string) => {
  console.log(e);

  const dom: HTMLElement = document.querySelector(`.${e}`)!;
  if (dom.style.zIndex === "" || dom.style.zIndex < "0") {
    showBox(dom);
  } else {
    if (e === "startMenu" || e === "search" || e === "widget") {
      return hideBox(false, dom, e);
    } else {
      hideBox(true, dom, e);
    }
  }
};
</script>
<style lang="less" scoped>
.fcs {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.taskbar {
  position: absolute;
  width: 100vw;
  background-color: @myBlue;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .tsleft {
    width: 212px;
    div {
      padding: 0 8px;
      .up {
        padding: 10px 0;
      }
    }
    .taskbarBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      line-height: 40px;
      transition: all 0.5s;
      text-align: center;
      &:hover {
        background-color: #fff;
        border-radius: 0.3em;
      }
      img {
        height: 24px;
        vertical-align: middle;
      }
    }
  }
  .center {
    display: flex;
    .taskbarBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      line-height: 40px;
      transition: all 0.5s;
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        border-radius: 0.3em;
      }
      img {
        height: 24px;
        vertical-align: middle;
      }
    }
  }
  .right {
    width: auto;
    height: 100%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    .wf {
      ul {
        display: flex;
        padding: 0;
        margin: 5px;
        li {
          padding: 0 6px;
          img {
            height: 16px;
            vertical-align: middle;
          }
        }
      }
    }
    .data {
      display: flex;
      padding: 0 5px 0 0;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
