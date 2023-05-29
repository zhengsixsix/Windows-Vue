<template>
  <div class="startMenu">
    <div class="content">
      <Transition mode="out-in">
        <component :is="changeTag" />
      </Transition>
    </div>
    <div class="bottom">
      <div class="user">
        <img src="@/assets/img/login/avatar.jpg" alt="" />
        <p>csc</p>
      </div>
      <i class="shutdown"></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppList from "./component/AppList.vue";
import AllApps from "./component/AllApps.vue";
import { markRaw, shallowRef } from "vue";
const componentTag = shallowRef(AppList);

const changeTag = () => {
  componentTag.value =
    componentTag.value === markRaw(AppList)
      ? markRaw(AllApps)
      : markRaw(AppList);
};
</script>
<style lang="less" scoped></style>
