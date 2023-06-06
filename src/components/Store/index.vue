<template>
  <lazy-component class="storeFullBox FullBox">
    <ToolBar>Store</ToolBar>
    <main>
      <div class="windowScreen">
        <div class="storeNav">
          <div
            class="uicon prtclk"
            v-for="(item, index) in uicon"
            :key="index"
            :class="TabActiviti === index ? 'TabActiviti' : ''"
            @click="totab(index, item.type)"
          >
            <font-awesome-icon
              :icon="item.icon"
              :style="{ color: item.style }"
            />
          </div>
        </div>
        <div class="restWindow" @mousewheel="scrollChange">
          <pageCont />
        </div>
      </div>
    </main>
  </lazy-component>
</template>
<script lang="ts" setup>
import ToolBar from "@/components/ToolBar/index.vue";
import pageCont from "./component/pageCont.vue";
import { ref } from "vue";
const uicon = [
  { icon: ["fas", "house"], style: "#888888", type: "sthome" },
  { icon: ["fas", "table-cells-large"], style: "#888888", type: "apprib" },
  { icon: ["fas", "gamepad"], style: "#888888", type: "gamerib" },
  { icon: ["fas", "film"], style: "#888888", type: "movrib" },
  { icon: ["fas", "download"], style: "#888888", type: "page1" },
];
let TabActiviti = ref(0);
const totab = (index: number, dom: string) => {
  if (dom) {
    let target = document.getElementById(dom);
    if (
      target &&
      target.parentNode &&
      target.parentNode.parentNode &&
      target.parentNode.parentNode instanceof HTMLElement
    ) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
  TabActiviti.value = index;
};
const scrollChange = () => {
  let tabs = ["sthome", "apprib", "gamerib", "movrib"];
  let mndis = window.innerHeight;
  tabs.forEach((item) => {
    let target = document.getElementById(item);
    if (
      target &&
      target.parentNode &&
      target.parentNode.parentNode &&
      target.parentNode.parentNode instanceof HTMLElement
    ) {
      let tsof = target.parentNode.parentNode.scrollTop,
        trof = target.offsetTop;
      if (Math.abs(tsof - trof) < mndis) {
        TabActiviti.value = tabs.indexOf(item);
        mndis = Math.abs(tsof - trof);
      }
    }
  });
};
</script>
<style lang="less" scoped>
.TabActiviti {
  background-color: #ffffff;
  svg {
    color: black !important;
  }
}
main {
  width: 100%;
  height: 100%;
}
.windowScreen {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  height: 100%;
  border-radius: 0 0 6px 6px;
  background: #f3f3f3 radial-gradient(#eff4f9 75%, #f3f3f3 100%) no-repeat fixed;
  .storeNav {
    display: flex;
    flex-direction: column;
    width: 5rem;
    height: 100%;
    .uicon {
      padding: 18px 0;
      margin: 0 4px 4px;
      position: relative;
      transition: all ease-in-out 100ms;
      border-radius: 4px;
      display: grid;
      place-items: center;
      &:hover {
        background-color: #ffffff;
        cursor: pointer;
        svg {
          color: black !important;
        }
      }
    }
  }
  .restWindow {
    flex: 1;
    position: relative;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #777a7c;
    }
  }
}
</style>
