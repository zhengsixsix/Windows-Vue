<template>
  <div class="pagecont">
    <div class="imageCont frontPage" id="sthome">
      <img src="@/assets/img/store/lucacover.jpg" alt="" />
    </div>
    <div class="panelName">Home</div>
    <div class="smallBox">
      <div class="storeRibbon">
        <div class="imageCont" v-for="(item, index) in Ribbon" :key="index">
          <a
            href="https://blueedge.me/unescape"
            v-if="item.title === 'unescape'"
            target="_blank"
            rel="noreferrer"
          >
            <img :src="getSrcApps(`${item.icon}`)" alt="" />
          </a>
          <img :src="getSrcApps(`${item.icon}`)" alt="" v-else />
        </div>
      </div>
    </div>

    <div id="apprib" class="frontCont">
      <div class="left-text">
        <div class="text-title">Featured Apps</div>
        <div class="tetx-info">
          Take your experience to new heights with these must-have apps
        </div>
      </div>
      <div class="right-content">
        <div class="ribcont" v-for="(item, index) in Apprib" :key="index">
          <div class="imageCont">
            <img :src="getSrcApps(`${item.icon}`)" alt="" />
          </div>
          <div class="capitalizz">
            {{ item.title }}
          </div>
          <div class="font">
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>

            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div className="text-xss">76.5k</div>
          </div>
          <div className="text-xss text-content">参数</div>
        </div>
      </div>
    </div>

    <div id="gamerib" class="frontCont">
      <div class="left-text">
        <div class="text-title">Featured Games</div>
        <div class="tetx-info">
          Take your experience to new heights with these must-have apps
        </div>
      </div>
      <div class="right-content">
        <div class="ribcont" v-for="(item, index) in Gamerib" :key="index">
          <div class="imageCont">
            <img :src="getSrcApps(`${item.icon}`)" alt="" />
          </div>
          <div class="capitalizz">
            {{ item.title }}
          </div>
          <div class="font">
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>

            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div className="text-xss">76.5k</div>
          </div>
          <div className="text-xss text-content">参数</div>
        </div>
      </div>
    </div>

    <div id="movrib" class="frontCont">
      <div class="left-text">
        <div class="text-title">Featured Films</div>
        <div class="tetx-info">
          Take your experience to new heights with these must-have apps
        </div>
      </div>
      <div class="right-content">
        <div class="ribcont" v-for="(item, index) in Movrib" :key="index">
          <div class="imageCont">
            <img :src="getSrcApps(`${item.icon}`)" alt="" />
          </div>
          <div class="capitalizz">
            {{ item.title }}
          </div>
          <div class="font">
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>

            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div class="uicon prtclk">
              <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div className="text-xss">76.5k</div>
          </div>
          <div className="text-xss text-content">参数</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getSrcApps } from "@/utils/getSrc";
import StoreApp from "@/data/StoreApp.json";
const { Ribbon, Apprib, Movrib, Gamerib } = StoreApp;
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
    &::-webkit-scrollbar {
      height: 7px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #777a7c;
    }
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

  #movrib,
  #gamerib,
  #apprib {
    margin: 15px 10px;

    border-radius: 8px;
    padding-top: 5rem;
    padding-bottom: 5rem;
    overflow-x: auto;
    display: flex;
    justify-content: space-between;
    &::-webkit-scrollbar {
      height: 7px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #777a7c;
    }
    .left-text {
      color: rgb(243 244 246);
      padding-left: 2rem;
      padding-right: 2rem;
      display: flex;
      flex-direction: column;
      width: 16rem;
      .text-title {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      .tetx-info {
        font-size: 0.75rem;
        line-height: 1rem;
        margin-top: 0.5rem;
      }
    }
    .right-content {
      width: max-content;
      padding-right: 2rem;
      display: flex;
      .ribcont {
        background-color: #ffffffb8;
        margin: auto 6px;
        width: 120px;
        transform-origin: center;
        transition: all ease-in-out 200ms;
        color: #000;
        padding: 10px;
        border-radius: 8px;
        &:hover {
          transform: scale(1.06) translateY(-4px);
          cursor: pointer;
        }
        .imageCont {
          display: grid;
          place-items: center;
          position: relative;

          img {
            border-radius: 8px;
            width: 100%;
          }
        }
        .capitalizz {
          text-transform: capitalize;
          font-weight: 600;
          font-size: 0.75rem;
          line-height: 1rem;
          margin-top: 15px;
        }
        .font {
          display: flex;
          .uicon {
            display: grid;
            place-items: center;
            margin-right: 2px;
            svg {
              color: #006ff0;
              width: 6px;
            }
          }
        }
        .text-xss {
          font-size: 0.64em;
        }
        .text-content {
          margin-top: 2rem;
        }
      }
    }
  }
  #movrib {
    background: linear-gradient(138deg, #522f8b 0%, rgb(113, 35, 133) 100%);
  }
  #gamerib {
    background: linear-gradient(138deg, #522f8b 0%, rgb(113, 35, 133) 100%);
  }
  #apprib {
    background: linear-gradient(137deg, #214458 0%, #098793 100%);
  }
}
</style>
