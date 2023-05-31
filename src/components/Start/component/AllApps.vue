<template>
  <div class="box2">
    <div class="topNav">
      <p>All app</p>
      <button class="elbutton" @click.stop="toPinned">
        <i class="el-icon--left"></i>
        Back
      </button>
    </div>

    <div class="tabList" v-if="!jump">
      <div
        class="scroll-item"
        v-for="(item, index) in tabListData"
        :key="index"
      >
        <h5 @click="showLetter">
          {{ item.mainList.length > 0 ? item.main : "" }}
        </h5>
        <div class="loopItem" v-for="(row, key) in item.mainList" :key="key">
          <img :src="getSrcStartIcon(`${row.url}.png`)" alt="" />
          <p>{{ row.name }}</p>
        </div>
      </div>
    </div>

    <div class="point" v-if="jump">
      <div
        :class="item.checked ? 'letters' : 'letter'"
        v-for="(item, index) in letterData"
        :key="index"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import StartData from "@/data/StartData.json";
const { tabListData, letterData } = StartData;
import { getSrcStartIcon } from "@/utils/getSrc";
const emit = defineEmits(["changeTag"]);
let jump = ref(false);
const toPinned = () => {
  emit("changeTag");
};
const showLetter = () => {
  jump.value = true;
  for (let i = 0; i < tabListData.length; i++) {
    for (let j = 0; j < letterData.length; j++) {
      const tlDatta = tabListData[i];
      const letter = letterData[i];

      if (tlDatta.main === letter.name && tlDatta.mainList.length > 0) {
        letter.checked = true;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.box2 {
  height: calc(100% - 54px);
  overflow: auto;
  .topNav {
    color: #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    margin: 10px 0;
    font-weight: 700;
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
  .tabList {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 10px;
    .scroll-item {
      h5 {
        width: 100%;
        padding-left: 5px;
        font-size: 0.76em;
        font-weight: 400;
        cursor: pointer;
      }
      .loopItem {
        display: flex;
        align-items: center;
        padding: 8px 0 8px 5px;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
          background: rgb(255, 255, 255);
        }
        img {
          width: 35px;
        }
        p {
          line-height: 17px;
          margin: 5px 0 5px 15px;
        }
      }
    }
  }
  .point {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-40%) translateY(-50%);

    width: 280px;
    height: 280px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(7, minmax(0, 1fr));
    cursor: pointer;
    .letter {
      color: rgba(0, 0, 0, 0.36);
    }
    .letters {
      color: #010101;
    }
  }
}
</style>
