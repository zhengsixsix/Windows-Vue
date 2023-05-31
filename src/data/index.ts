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
interface TOGGLETASKPUBLICDATA {
  zIndex: number;
  currentAppCount: HTMLElement[];
}
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
export const toggleTaskPublicData: TOGGLETASKPUBLICDATA = {
  zIndex: 1,
  currentAppCount: [],
};
export const toolSize = {
  viewSizeWidth: 800,
  viewSizeHeight: 500,
  left: document.body.clientWidth / 4,
  top: 150,
};
export const deskTopData = [
  {
    icon: "user.png",
    name: "User",
    componentName: "user",
    posIdx: 1,
  },
  {
    icon: "bin1.png",
    name: "垃圾箱",
    componentName: "Rubish",
    posIdx: 2,
  },
  {
    icon: "settings.png",
    name: "设置",
    componentName: "settingFullBox",
    posIdx: 3,
  },
  {
    icon: "edge.png",
    name: "Edge",
    componentName: "EdgeFullBox",
    posIdx: 4,
  },
  {
    icon: "store.png",
    name: "store",
    componentName: "storeFullBox",
    posIdx: 6,
  },
];
