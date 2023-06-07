<template>
  <div class="calnpane dpShad">
    <div class="topBar">
      <div class="date">
        {{
          new Date().toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
          })
        }}
      </div>
      <div class="collapser rounded">
        <div class="uicon prtclk">
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </div>
      </div>
    </div>
    <div id="dycalendar"></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

interface DYCALENDAR extends Window {
  dycalendar: any;
}
const initDay = () => {
  (window as unknown as DYCALENDAR).dycalendar.draw({
    target: "#dycalendar",
    type: "month",
    dayformat: "ddd",
    monthformat: "full",
    prevnextbutton: "show",
    highlighttoday: true,
  });
};
onMounted(() => {
  initDay();
});
</script>
<style lang="less">
.calnpane {
  position: absolute;
  bottom: 58px;
  right: 12px;
  width: 360px;
  border-radius: 0.5rem;
  background: @myBlue;
  padding: 1.25rem 1.25rem 2rem 1.25rem;
  overflow: hidden;
  z-index: -1;
}
</style>
