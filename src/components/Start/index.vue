<template>
  <div class="startMenu">
    <div class="content">
      <transition name="fade" mode="out-in">
        <component :is="componentTag" @changeTag="changeTag" />
      </transition>
    </div>
    <div class="bottomMenu">
      <div class="user">
        <img src="@/assets/img/login/avatar.jpg" alt="" />
        <p>{{ username }}</p>
      </div>
      <i class="shutdown"></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppList from "./component/AppList.vue";
import AllApps from "./component/AllApps.vue";
import useUserStore from "@/store/userStore";
import { markRaw, ref, shallowRef } from "vue";
const store = useUserStore();
const username = ref<string>(store.getUsername);
const componentTag = shallowRef(AppList);

const changeTag = () => {
  componentTag.value =
    componentTag.value === markRaw(AppList)
      ? markRaw(AllApps)
      : markRaw(AppList);
};
</script>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.startMenu {
  width: 610px;
  height: 636px;
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(34, 34, 34, 0.25);
  background-color: @myBlue;
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  .content {
    height: 100%;
  }
  .bottomMenu {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    height: 54px;
    width: 100%;
    background-color: rgba(175, 175, 175, 0.1);
    padding: 0 16px;
    justify-content: space-between;
    align-items: center;
    .user {
      display: flex;
      align-items: center;
      cursor: pointer;
      img {
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    .shutdown {
      background-image: url("@/assets/img/icon/ui/power.png");
      width: 22px;
      background-size: 90%;
      cursor: pointer;
      background-repeat: no-repeat;
      height: 22px;
      filter: invert(1);
    }
  }
}
</style>
