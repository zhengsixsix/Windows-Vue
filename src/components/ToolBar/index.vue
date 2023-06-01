<template>
  <div class="topButton" ref="ParentRef">
    <div class="title" @mousedown="moveBox">
      <slot></slot>
    </div>
    <div class="functionArea">
      <button @click="min">
        <img src="@/assets/img/setting/minimize.png" />
      </button>
      <button @click="max">
        <img :src="getSrcSetting(`${MaxOrMin}.png`)" alt="" />
      </button>
      <button @click="close">
        <img src="@/assets/img/setting/close.png" />
      </button>
    </div>

    <div class="right"></div>
    <div class="bottom"></div>
    <div class="splitTool">
      <div class="splitLeft">
        <span class="splitLeft-left"></span>
        <span class="splitLeft-right"></span>
      </div>
      <div class="splitRight">
        <span class="splitRight-top"></span>
        <span class="splitRight-bottom"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";
import { getSrcSetting } from "@/utils/getSrc";
import { toolSize } from "@/data";
import { searchMaxZindex, hideBox } from "@/utils";
const MaxOrMin = ref("maxmin");
const that = getCurrentInstance()! as any;
let parent: HTMLElement;
onMounted(() => {
  parent = that.refs.ParentRef.parentElement;
  parent.style.width = `${toolSize.viewSizeWidth}px`;
  parent.style.height = `${toolSize.viewSizeHeight}px`;
  parent.style.left = `${toolSize.left}px`;
  parent.style.top = `${toolSize.top}px`;
});
const close = () => {
  hideBox(false, parent, parent.classList[0]);
};
const max = () => {
  if (parent.style.width === "" || parent.style.width === "100%") {
    parent.style.width = `${toolSize.viewSizeWidth}px`;
    parent.style.height = `${toolSize.viewSizeHeight}px`;
    parent.style.left = `${toolSize.left}px`;
    parent.style.top = `${toolSize.top}px`;
  } else {
    parent.style.height = "100%";
    parent.style.width = "100%";
    parent.style.left = "0";
    parent.style.top = "0";
  }
  changeIcon();
};
const changeIcon = () => {
  const allTcon = ["maxmin", "maximize"];
  if (parent.style.width === "" || parent.style.width === "100%") {
    MaxOrMin.value = allTcon[1];
  } else {
    MaxOrMin.value = allTcon[0];
  }
};
const min = () => {
  hideBox(true, parent, parent.classList[0]);
};
const moveBox = (e: any) => {
  if (parent) {
    if (searchMaxZindex() > 0) {
      parent.style.zIndex = searchMaxZindex().toString();
    }

    const X = e.pageX - parent.offsetLeft;
    const Y = e.pageY - parent.offsetTop;

    parent.classList.add("notransition");
    const move = (e: any) => {
      let TOP = e.pageY - Y;
      let LEFT = e.pageX - X;
      let mainDom = document.querySelector("main")!;
      if (mainDom.offsetHeight > TOP + toolSize.viewSizeHeight && TOP > 0) {
        parent.style.top = TOP + "px";
        toolSize.top = TOP;
      }
      if (LEFT > 0 && mainDom.offsetWidth > LEFT + toolSize.viewSizeWidth) {
        parent.style.left = LEFT + "px";
        toolSize.left = LEFT;
      }
    };
    // 添加监听和移除监听
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", () => {
      parent.classList.remove("notransition");
      document.removeEventListener("mousemove", move);
    });
  }
};
</script>

<style lang="less" scoped>
.topButton {
  display: flex;
  height: 30px;
  justify-content: space-between;
  user-select: none;
  .title {
    width: calc(100% - 150px);
    display: flex;
    justify-content: flex-start;
    padding-left: 10px;
    line-height: 30px;
    font-size: 12px;
    background: #7fabc8;
  }
  .functionArea {
    flex: 1;
    button {
      width: 33.33%;
      height: 100%;
      border: 0;
      padding: 9.6px;
      background-color: #7fabc8;
      img {
        width: 45%;
        padding-bottom: 9.6px;
      }
      &:hover {
        background-color: #d6d6d7;
      }
      &:nth-last-child(1):hover {
        background-color: red;
      }
    }
  }
}
</style>
