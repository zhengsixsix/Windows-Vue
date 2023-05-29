<template>
  <div>
    <div
      class="mid-size"
      v-if="imgInfo.size == 'm' && !isUrlObject(imgInfo.url)"
    >
      <img :src="getSrcLeftPane(`${imgInfo.url}.png`)" alt="" />
    </div>
    <div
      class="long-size"
      v-if="imgInfo.size == 'l' && !isUrlObject(imgInfo.url)"
    >
      <img :src="getSrcLeftPane(`${imgInfo.url}.png`)" alt="" />
    </div>
    <div
      class="mid-size flex-column"
      v-if="imgInfo.size == 's' && isUrlObject(imgInfo.url)"
    >
      <div class="small-size">
        <img
          :src="getSrcLeftPane(`${imgInfo.url.smallImgList[0]}.png`)"
          alt=""
        />
      </div>
      <div class="small-size">
        <img
          :src="getSrcLeftPane(`${imgInfo.url.smallImgList[1]}.png`)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
type urlObject = {
  smallImgList: string[];
};
interface ImgInfo {
  url: urlObject | string;
  size?: string;
  height?: number;
}
import { getSrcLeftPane } from "@/utils/getSrc";
import { defineProps } from "vue";
const props = defineProps<{
  imgInfo: ImgInfo;
}>();
const { imgInfo } = props;
const isUrlObject = (url: string | urlObject): url is urlObject => {
  return (url as urlObject).smallImgList !== undefined;
};
</script>
<style lang="less" scoped>
.mid-size {
  width: 337px;
  height: 345px;
}
img {
  width: 100%;
  border-radius: 10px;
  &:hover {
    opacity: 0.8;
    transform: scale(1.01);
    transition: all 0.3s;
    cursor: pointer;
  }
}
</style>
