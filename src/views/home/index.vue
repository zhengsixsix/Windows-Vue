<template>
  <div class="desktop">
    <main>
      <DesktopIcon />
      <Setting />
    </main>
    <footer>
      <taskBar />
    </footer>
  </div>
</template>
<script lang="ts" setup>
import taskBar from "@/components/taskBar/index.vue";
import Setting from "@/components/Setting/index.vue";
import DesktopIcon from "@/components/DesktopIcon/index.vue";
import { onMounted } from "vue";
import { getSrcSettingTheme } from "@/utils/getSrc";
import useUserStore from "@/store/userStore";
const store = useUserStore();
onMounted(() => {
  (
    document.querySelector(".desktop")! as HTMLElement
  ).style.backgroundImage = `url(${getSrcSettingTheme(
    `${store.getTheme}.jpg`
  )})`;
});
</script>
<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.desktop {
  height: 100vh;
  width: 100vw;
  background-size: 100% 100%;
  main {
    height: calc(100% - 48px);
    width: 100%;
    background-size: 100% 100%;
  }
  footer {
    height: 48px;
    width: 100%;
  }
}
</style>
