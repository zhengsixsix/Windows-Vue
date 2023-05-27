<template>
  <div class="bg">
    <div class="date-info">
      <div class="date-info__left">
        {{ time }}
      </div>
      <div class="date-info__right">
        <div>{{ date }}</div>
        <div>{{ day }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import { onUnmounted, ref } from "vue";
const calendarTableHeader = ["日", "一", "二", "三", "四", "五", "六"];
let time = ref<string>();
let date = ref<string>();
let day = ref<string>();
let timeId = ref<number>();

const updateTime = () => {
  const now = dayjs();
  const nowYear = now.year();
  const nowMonth = now.month() + 1;
  const nowDay = now.day();
  const nowDate = now.date();
  const nowHour = now.hour();
  const min = now.minute();
  const nowMin = min < 10 ? `0${min}` : min;
  date.value = `${nowYear}/${nowMonth}/${nowDate}`;
  day.value = `星期${calendarTableHeader[nowDay]}`;
  time.value = `${nowHour}:${nowMin}`;
};
updateTime();
timeId.value = setInterval(() => {
  updateTime();
}, 1000);
onUnmounted(() => {
  clearInterval(timeId.value);
});
</script>
<style lang="less" scoped>
.bg {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-color: black;
  background-image: url("@/assets/img/login/lock.jpg");
}
.date-info {
  position: fixed;
  left: 50%;
  top: 350px;
  color: #fff;
  margin-left: -113px;
  & > * {
    display: inline-block;
    vertical-align: middle;
  }
  .date-info__left {
    font-size: 64px;
    margin-right: 5px;
  }
  .date-info__right {
    font-size: 20px;
    line-height: 1.5em;
  }
}
</style>
