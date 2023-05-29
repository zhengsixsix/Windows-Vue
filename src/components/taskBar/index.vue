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
          <div id="taskMenu" class="taskbarBtn">
            <img :src="getSrcIcon(item.icon)" :id="`${item.icon}Img`" alt="" />
          </div>
        </template>
      </Popup>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { COMPONENT } from "@/type/UTILSTYPE";
interface TSTOPITEM {
  component: COMPONENT;
  icon: string;
  way: string;
}
type TSTop = Array<TSTOPITEM>;
import leftPane from "../leftPane/index.vue";
import { taskBarBottomPop } from "@/data/index.ts";
import { getSrcIcon } from "@/utils/getSrc";
console.log(taskBarBottomPop);

const tsTop: TSTop = taskBarBottomPop;
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
}
</style>
