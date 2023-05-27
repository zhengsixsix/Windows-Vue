<template>
  <Popup>
    <div class="wrap">
      <div class="login-wrap">
        <div class="user-wrap">
          <div class="avatar-wrap">
            <img src="@/assets/img/login/avatar.jpg" />
          </div>
          <div class="username">参数</div>
        </div>
        <input class="password-ipt" @keyup="keyEvent" v-model="password" />
        <img
          src="@/assets/img/login/rightrow.png"
          class="rightrow"
          @click="goToHome"
        />
      </div>
    </div>
  </Popup>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const Router = useRouter();
let password = ref<number>();
const keyEvent = (e: any) => {
  if (e.keyCode === 13) Router.push("/home");
};
const goToHome = () => {
  Router.push("/home");
};
</script>
<style lang="less" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/img/login/lock.jpg");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s ease-in-out;
  background-attachment: fixed;
  .login-wrap {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    .user-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar-wrap {
        img {
          width: 10em;
          height: 10em;
          border-radius: 50%;
        }
      }
      .username {
        color: white;
        font-size: 1.8em;
        margin: 0.8em;
      }
    }
    .password-ipt {
      position: absolute;
      top: 18.6em;
      height: 1.8em;
      width: 18em;
      padding: 0.3em;
      padding-right: 2em;
    }

    .rightrow {
      left: 20em;
      margin-left: 13em;
      width: 1.6em;
      height: 1.6em;
      z-index: 1;
      cursor: pointer;
    }
  }
}
</style>
