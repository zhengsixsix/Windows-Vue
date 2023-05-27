<template>
  <LockScreen @click="clickshow" v-show="!showcut" />
  <Login v-show="showcut" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import LockScreen from "./component/LockScreen.vue";
import Login from "./component/Login.vue";

let showcut = ref(false);
const clickshow = () => {
  showcut.value = true;
};
</script>
<style lang="less" scoped></style>
