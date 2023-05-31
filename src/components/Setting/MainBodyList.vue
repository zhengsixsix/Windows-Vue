<template>
  <ul class="settingMainBodyList">
    <li v-for="(item, index) in data" :key="index">
      <div v-if="item.type === 'sysTop'">
        <div :class="item.type">
          <div class="left">
            <img
              :src="getSrcSettingTheme(`${store.getTheme}.jpg`)"
              alt=""
              class="systemThemeImg"
            />
            <div class="message">
              <p>{{ store.getUsername }}</p>
              <p>NS14A8</p>
              <p>Rename</p>
            </div>
          </div>
          <div class="right">
            <div class="column">
              <div>
                <span>Microsoft 365</span>
                <span class="column_lower">View benefits</span>
              </div>
            </div>
            <div class="column">
              <img
                :src="getSrcSetting(`Windows Update.webp`)"
                alt=""
                style="height: 20px"
              />
              <span>Windows Update</span>
              <span class="column_lower">You're up to date</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="item.type === 'spacer'">
        <div :class="item.type">
          {{ item.name }}
        </div>
      </div>
      <div v-else-if="item.type === 'netTop'">
        <div :class="item.type">
          <div>
            <img :src="getSrcSetting('wifi1.png')" alt="" />
            <div class="message">
              <h2>WiFi</h2>
              <p>Connected, secured</p>
            </div>
          </div>
          <div>
            <img class="warning" :src="getSrcSetting('warning.jpg')" alt="" />
            <div class="message">
              <h2>Properties</h2>
              <p>Public network 5 Ghz</p>
            </div>
          </div>
          <div>
            <img class="warning" :src="getSrcSetting('warning.jpg')" alt="" />
            <div class="message">
              <h2>Data Usage</h2>
              <p>{{ Math.round(Math.random() * 100) }}GB, last 30 days</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="item.type === 'personaliseTop'">
        <div :class="item.type">
          <div>
            <img
              :src="getSrcSettingTheme(`${store.$state.themeSrc}.jpg`)"
              alt=""
            />
          </div>
          <div>
            <h3>Select a theme to apply</h3>
            <div class="themeSelect">
              <img
                v-for="item in themeImgData"
                :key="item.name"
                :src="getSrcSettingTheme(`${item.name}.jpg`)"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="item.type === 'accountsTop'">
        <div :class="item.type">
          <img :src="getSrcSetting('defAccount.jpg')" alt="" />
          <div className="message">
            <span>{{ store.getUsername }}</span>
            <span>Local Account</span>
            <span>Administrator</span>
          </div>
        </div>
      </div>
      <div v-else-if="item.type === 'timeTop'">
        <div :class="item.type">
          <h1>
            {{
              new Date().toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })
            }}
          </h1>
        </div>
      </div>
      <div v-else-if="item.type === 'updateTop'">
        <div :class="item.type">
          <div>
            <img :src="getSrcSetting('update.png')" alt="" />
            <div>
              <span>You're up to date</span>
              <span>Last checked: Today</span>
            </div>
          </div>
          <div>
            <button>Check for updates</button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="descMessage">
          <span class="descMessage-name">{{ item.name }}</span>
          <span class="descMessage-desc">{{ item.desc }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
interface SettingDataITEM {
  desc?: string;
  icon?: string;
  name?: string;
  type: string;
}
import useUserStore from "@/store/userStore";
import { getSrcSetting, getSrcSettingTheme } from "@/utils/getSrc";
const store = useUserStore();
defineProps<{
  data: Array<SettingDataITEM>;
}>();
const themeImgData = [
  {
    name: "default",
  },
  {
    name: "dark",
  },
  {
    name: "moon",
  },
  {
    name: "stream",
  },
  {
    name: "color",
  },
  {
    name: "color1",
  },
];
</script>
<style lang="less" scoped></style>
