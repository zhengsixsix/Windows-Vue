<template>
  <div class="sidePane">
    <div class="quickSettings">
      <div class="qkCont">
        <div class="qset-item" v-for="(item, index) in WifiData" :key="index">
          <div class="quickIcon">
            <div>
              <img :src="getSrcIconUI(`${item.url}.png`)" alt="" />
            </div>
          </div>
          <div class="qktext">{{ item.name }}</div>
        </div>
      </div>

      <div class="slineCont">
        <div>
          <img width="20" src="@/assets/img/icon/ui/brightness.png" alt="" />
        </div>
        <input
          class="Slider"
          type="range"
          min="10"
          max="100"
          v-model="Brightness"
        />
      </div>

      <div class="slineCont">
        <div>
          <img width="20" src="@/assets/img/icon/ui/audio3.png" alt="" />
        </div>
        <input class="Slider" type="range" min="10" max="100" value="50" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import wifiData from "@/data/WifiData.json";
import { getSrcIconUI } from "@/utils/getSrc";
import { ref, watch } from "vue";
const { WifiData } = wifiData;
const Brightness = ref(50);
watch(
  Brightness,
  (value) => {
    const body = document.querySelector("body")!;
    const brightnessValue = value;
    body.style.filter = `brightness(${brightnessValue * 2}%)`;
  },
  { immediate: true }
);
</script>
<style lang="less" scoped>
.sidePane {
  position: absolute;
  bottom: 58px;
  right: 12px;
  width: 360px;
  border-radius: 0.5rem;
  background: @myBlue;
  padding: 1.25rem 1.25rem 2rem 1.25rem;
  overflow: hidden;
  z-index: -1;
  .quickSettings {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .qkCont {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .qset-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #2e2e2f;
        .quickIcon {
          &:hover {
            background: rgb(216 229 240 / 84%);
          }
          width: 6rem;
          height: 3rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom-color: rgba(0, 0, 0, 0.2);
          background: #fffefecf;
          border: solid 0.1px rgba(17, 17, 17, 0.1);
          img {
            width: 24px;
          }
        }
        .qktext {
          font-size: 0.75em;
          margin: 0.5rem 0 1.33rem 0;
        }
      }
    }
    .slineCont {
      width: 100%;
      display: flex;
      align-items: center;
      input {
        width: 100%;
        height: 5px;
        margin-left: 10px;
      }
    }
  }
}
</style>
