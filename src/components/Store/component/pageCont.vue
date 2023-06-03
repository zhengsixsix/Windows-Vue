<template>
  <div class="pagecont">
    <div class="imageCont frontPage">
      <img src="@/assets/img/store/lucacover.jpg" alt="" />
    </div>
    <div class="panelName">Home</div>
    <div class="smallBox">
      <div class="storeRibbon">
        <div class="imageCont" v-for="(item, index) in Ribbon" :key="index">
          <a
            href="https://blueedge.me/unescape"
            v-if="item.type === 'unescape'"
            target="_blank"
            rel="noreferrer"
          >
            <img :src="item.icon" alt="" />
          </a>
          <img :src="item.icon" alt="" v-else />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import luca from "@/assets/img/store/float/luca.png";
import essential from "@/assets/img/store/float/essential apps.png";
import unescape from "@/assets/img/store/float/unescape.png";
import utility from "@/assets/img/store/float/utility apps.png";
import forza from "@/assets/img/store/float/forza horizon.png";
import kids from "@/assets/img/store/float/kids apps.png";
import microsoft from "@/assets/img/store/float/microsoft 365.png";
import security from "@/assets/img/store/float/security.png";
import social from "@/assets/img/store/float/social media.png";
import xbox from "@/assets/img/store/float/xbox gamepass.png";
const Ribbon = [
  { icon: luca, type: "luca" },
  { icon: essential, type: "essential" },
  { icon: unescape, type: "unescape" },
  { icon: utility, type: "utility" },
  { icon: forza, type: "forza" },
  { icon: kids, type: "kids" },
  { icon: microsoft, type: "microsoft" },
  { icon: security, type: "security" },
  { icon: social, type: "social" },
  { icon: xbox, type: "xbox" },
];
</script>
<style lang="less" scoped>
.pagecont {
  border-radius: 6px;
  background-color: rgb(255, 255, 255 / 50%);
  border: 1px solid #e2e2e2;
  min-height: 100%;
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 0;
  .imageCont {
    display: grid;
    place-items: center;
    width: auto;
    height: auto;
    position: relative;
  }
  .frontPage {
    position: relative;
    max-height: calc(100vh - 150px);
    overflow-y: hidden;
    img {
      width: 100%;
    }
  }
  .panelName {
    position: absolute;
    top: 0;
    color: #fefefe;
    text-shadow: -1px 1px 4px rgba(0, 0, 0, 0.4);
    margin: 1.5rem;
  }
  .smallBox {
    overflow-y: hidden;
    overflow-x: scroll;
    width: 100%;
    margin-top: -4rem;
    .storeRibbon {
      display: flex;
      display: flex;
      width: max-content;
      padding: 0 28px;
      .imageCont {
        display: grid;
        place-items: center;
        width: auto;
        height: auto;
        margin: 0 5px;
        img {
          height: 100px;
          max-width: 100%;
          max-height: 100%;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
