<template>
  <div>
    <div class="mid-size" v-if="imgInfo.size == 'm'">
      <img :src="getSrcLeftPane(`${imgInfo.url}.png`)" alt="" />
    </div>
    <div class="long-size" v-if="imgInfo.size == 'l'">
      <img :src="getSrcLeftPane(`${imgInfo.url}.png`)" alt="" />
    </div>
    <div class="mid-size flex-column" v-if="imgInfo.size == 's'">
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
<script lang="ts" scoped>
interface ImgInfo {
  url: string;
  size?: string;
  height?: number;
}
import { getSrcLeftPane } from "@/utils/getSrc";
import { defineProps } from "vue";
const props = defineProps<{
  imgInfo: any;
}>();
console.log(props);
</script>
