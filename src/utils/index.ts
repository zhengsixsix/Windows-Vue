import { taskBarData, toggleTaskPublicData } from "@/data";
/**
 * @param {*} target 目标组件元素
 *
 * 传入目标元素，约定底部栏的name和各组件的类名同名
 * 展示该组件
 */
export const showBox = (target: HTMLElement, name?: string) => {
  if (!target) return;
  target.style.zIndex = topZindex(target);
  target.classList.add("showBox");
  target.classList.remove("hideBox");
  if (name) {
    let flag = false;
    taskBarData.map((item) => {
      if (item.name === name) {
        flag = true;
      }
    });
    if (flag) return;
    taskBarData.push({
      icon: `${name}.png`,
      name,
    });
  }
};

/**
 * @param {*} flag 是否最小化或者关闭
 * @param {*} target 目标组件
 * @param {*} e 底部栏名字，是一个类
 *
 * 根据是否为最小化或者关闭，决定是否给borderBottom
 * 由于底部栏的id和组件的类名同名，所以可以同时操作是否显示borderBottom
 */
export const topZindex = (target: HTMLElement) => {
  forAppArray(); // 先降级
  toggleTaskPublicData.currentAppCount.push(target);
  return ++toggleTaskPublicData.zIndex + "";
};

/**
 * @param {*} target 目标组件
 * 在data目录中共同维护一个最高层级的索引值，
 * 每次调用此函数，返回当前最大的索引级数返回给调用者，同时维护该数据++
 */
export const forAppArray = () => {
  toggleTaskPublicData.currentAppCount.map((item: HTMLElement) => {
    item.style.zIndex =
      --toggleTaskPublicData.zIndex < 1 ? "1" : item.style.zIndex.toString();
  });
};

/**
 * @param {*} flag 是否最小化或者关闭
 * @param {*} target 目标组件
 * @param {*} e 底部栏名字，是一个类
 *
 * 根据是否为最小化或者关闭，决定是否给borderBottom
 * 由于底部栏的id和组件的类名同名，所以可以同时操作是否显示borderBottom
 */
export const hideBox = (flag: boolean, target: HTMLElement, e: string) => {
  // if (!flag) return;
  target.style.zIndex = "-1";
  target.classList.remove("showBox");
  target.classList.add("hideBox");
  relizeZindex(target);
  const item = document.querySelector(`#${e}`) as HTMLElement;
  if (!flag) {
    item.style.borderBottom = "0";
  } else {
    item.style.borderBottom = "3px solid black";
  }
};

/**
 * @param {*} target 目标组件
 * 切换task显示将其透明度设置为-1，并维护公共数据，表明
 * 当前页面上显示的application数字减一
 */
export const relizeZindex = (target: HTMLElement) => {
  toggleTaskPublicData.currentAppCount.map((value, i, array) => {
    const originClass = value.getAttribute("class");
    const targetClass = target.getAttribute("class");
    if (originClass === targetClass) {
      array.splice(i, 1);
    }
  });
  toggleTaskPublicData.zIndex = -1;
};
export const searchMaxZindex = () => {
  forAppArray();
  return toggleTaskPublicData.zIndex;
};
