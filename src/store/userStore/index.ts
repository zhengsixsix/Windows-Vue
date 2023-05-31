import { defineStore } from "pinia";
import { getSrcSettingTheme } from "@/utils/getSrc";
type STATE = {
  username: string;
  themeSrc: string;
};
const useUserStore = defineStore("useStore", {
  state: (): STATE => ({
    username: "",
    themeSrc: window.localStorage.getItem("theme") || "default",
  }),
  getters: {
    getTheme: (state: STATE) => {
      return state.themeSrc || window.localStorage.getItem("theme");
    },
    getUsername: (state: STATE) => {
      return state.username || "btqf";
    },
  },
  actions: {},
});
export default useUserStore;
