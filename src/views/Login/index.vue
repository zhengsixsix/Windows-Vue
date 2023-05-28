<template>
  <BootScreen v-if="!clock" />
  <LockScreen @click="clickshow" v-show="!showcut && clock" />
  <Login v-show="showcut" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import BootScreen from "./component/BootScreen.vue";
import LockScreen from "./component/LockScreen.vue";
import Login from "./component/Login.vue";

let showcut = ref(false);
let clock = ref(false);
const clickshow = () => {
  showcut.value = true;
};
setTimeout(() => {
  clock.value = true;
}, 2000);
</script>
<style lang="less" scoped></style>
