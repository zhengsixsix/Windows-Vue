<template>
  <ul class="settingMainBodyList">
    <li v-for="(item, index) in data" :key="index" :class="item.type + 's'">
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
                style="height: 20px; width: 20px"
              />
              <div>
                <span>Windows Update</span>
                <span class="column_lower">You're up to date</span>
              </div>
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
              class="CurrentImg"
              :src="getSrcSettingTheme(`${store.$state.themeSrc}.jpg`)"
              alt=""
            />
          </div>
          <div>
            <h3 style="text-align: center; margin: 10px 0">
              Select a theme to apply
            </h3>
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
          <img
            :src="getSrcSetting('defAccount.png')"
            alt=""
            style="width: 3.5em; height: 3.5em"
          />
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
<style lang="less" scoped>
.updateTops,
.timeTops,
.accountsTops,
.personaliseTops,
.netTops,
.spacers,
.sysTops {
  background: none !important;
  position: static !important;
  display: block !important;
  height: auto !important;
  border: none !important;
  border-radius: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  animation: none !important;
  &::after {
    content: none !important;
  }
}
.sysTop {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  animation: slideIn 0.5s;

  .left {
    display: flex;
    flex-direction: row;

    .systemThemeImg {
      width: 7em;
      height: 4.5em;
      border: 0.2em solid black;
      border-radius: 0.3em;
    }

    .message {
      padding: 1em;
      text-align: center;

      p {
        margin: 0 !important;

        &:nth-child(3) {
          color: blue;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    flex-direction: row;

    .column {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.6em 0.4em;
      border-radius: 0.2em;

      &_lower {
        font-size: 0.5em;
        color: #888b8e;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      img {
        margin: 0.4em;
      }

      &:hover {
        background-color: #e4e8ec;
      }
    }
  }
}

.spacer {
  width: 100%;
  height: 1em;
}

.square {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 11em;
  height: 11em;
  border: 1px solid #e1e2e3;
  background-color: #fafbfd;
  margin-bottom: 0.5em;
  animation: slideIn 0.5s;

  &::before {
    content: "+";
    font-size: 4em;
    font-weight: 200;
  }

  &:hover {
    background-color: #f5f8fb;
  }
}

.thin-blue {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 4em;
  border: 1px solid #e1e2e3;
  background-color: #fafbfd;
  margin-bottom: 0.5em;
  font-weight: 400;
  font-size: 0.6em;
  color: blue;
  animation: slideIn 0.5s;

  &:hover {
    background-color: #f5f8fb;
  }
}

.netTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  animation: slideIn 0.5s;

  div {
    display: flex;
    justify-content: center;

    img {
      width: 6em;
    }

    .warning {
      width: 40px;
    }

    .message {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 0.5em;

      h2 {
        margin: 0;
        font-size: 1em;
        font-weight: 400;
      }

      h3 {
        margin: 0;
        font-size: 0.9em;
        font-weight: 400;
      }

      p {
        margin: 0;
        font-size: 0.7em;
        font-weight: 400;
      }
    }
  }
}

.personaliseTop {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;
  animation: slideIn 0.5s;

  .CurrentImg {
    width: 20em;
    height: 12em;
    border-radius: 1em;
    border: 0.4em solid black;
  }

  div {
    margin-right: 2em;

    h3 {
      margin: 0;
    }
  }

  .themeSelect {
    width: 22em;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-right: 0;

    img {
      width: 30%;
      margin-right: 0.5em;
      margin-bottom: 0.5em;
      border: 0;
      border-radius: 0.3em;
    }
  }
}

.accountsTop {
  display: flex;
  justify-content: flex-start;
  animation: slideIn 0.5s;

  img {
    width: 6em;
  }

  .message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1em;

    span:nth-child(2),
    span:nth-child(3) {
      font-size: 0.8em;
      color: #7c7e81;
    }
  }
}

.timeTop {
  animation: slideIn 0.5s;

  h1 {
    padding: 0.5em 0.8em;
    margin: 0;
  }
}

.subHeading {
  display: flex;
  align-items: center;
  height: 2em;
  animation: slideIn 0.5s;
}

.updateTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  animation: slideIn 0.5s;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 6em;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 1em;

      span:nth-child(1) {
        font-size: 1.2em;
      }

      span:nth-child(2) {
        font-size: 0.9em;
        color: #7c7e81;
      }
    }

    button {
      font-size: 0.85em;
      padding: 0.5em 0.9em;
      background-color: #0067c0;
      border: 0;
      border-radius: 0.3em;
      color: white;
    }
  }
}

.settingMainBodyList {
  list-style: none;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  li {
    position: relative;
    display: flex;
    align-items: center;
    width: 90%;
    height: 4em;
    background-color: #fafbfd;
    border-radius: 0.25em;
    padding-left: 0.5em;
    margin: 0.5em;
    margin-left: 0;
    border: 1px solid #e1e2e3;
    animation: slideIn 0.5s;

    img {
      width: 1.5em;
    }

    .descMessage {
      display: flex;
      flex-direction: column;
      margin: 0 2em 0 1.2em;
      text-align: left;

      &-name {
        font-size: 0.9em;
      }

      &-desc {
        font-size: 0.2em;
      }
    }

    &::after {
      position: absolute;
      right: 1em;
      content: "🔜";
    }

    &:hover {
      background-color: #f5f8fb;
    }
  }
}

ul::-webkit-scrollbar {
  width: 3px;
}

ul::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #777a7c;
}

@keyframes slideIn {
  from {
    transform: translateY(4em);
  }

  to {
    transform: translateY(0);
  }
}
</style>
