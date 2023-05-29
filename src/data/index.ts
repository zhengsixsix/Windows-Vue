import { shallowRef, reactive } from "vue";

import Start from "@/components/Start/index.vue";
import Search from "@/components/Search/index.vue";

import { COMPONENT } from "@/type/UTILSTYPE";
interface TASKBARBOTTOMPOPITEM {
  icon: string;
  name: string;
  way: string;
  component: COMPONENT;
}
type TaskBarBottomPop = Array<TASKBARBOTTOMPOPITEM>;

export const taskBarBottomPop: TaskBarBottomPop = [
  {
    icon: "home.png",
    name: "startMenu",
    way: "bottom",
    component: shallowRef(Start),
  },
  {
    icon: "search.png",
    name: "search",
    way: "bottom",
    component: shallowRef(Search),
  },
];

export const taskBarData = reactive([
  {
    icon: "settings.png",
    name: "settingFullBox",
  },
  {
    icon: "explorer.png",
    name: "FolderFullBox",
  },
  {
    icon: "edge.png",
    name: "EdgeFullBox",
  },
  {
    icon: "store.png",
    name: "storeFullBox",
  },
]);
export const toggleTaskPublicData = {
  zIndex: 1,
  currentAppCount: [],
};
