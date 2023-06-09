const getSrcSettingTheme = (name: string) => {
  if (typeof name === "undefined") return "error.png";
  const path = `/src/assets/img/setting/assetsImg/default/${name}`;
  const modules = import.meta.globEager(
    `/src/assets/img/setting/assetsImg/default/*`
  );
  return (modules[path] as { default: string })?.default ?? "error.png";
};

const getSrcStartIcon = (name: string) => {
  if (typeof name === "undefined") return "error";
  const path = `/src/assets/img/icon/startIcon/${name}`;
  const modules = import.meta.globEager(`/src/assets/img/icon/startIcon/*`);
  return (modules[path] as { default: string })?.default ?? "error";
};

const getSrcIconUI = (name: string) => {
  if (typeof name === "undefined") return "error.png";
  const path = `/src/assets/img/icon/ui/${name}`;
  const modules = import.meta.globEager(`/src/assets/img/icon/ui/*`);
  return (modules[path] as { default: string })?.default ?? "error.png";
};

const getSrcIcon = (name: string) => {
  if (typeof name === "undefined") return "error.png";
  const path = `/src/assets/img/icon/${name}`;
  const modules = import.meta.globEager(`/src/assets/img/icon/*`);
  return (modules[path] as { default: string })?.default ?? "error.png";
};

const getSrcSearch = (name: string) => {
  if (typeof name === "undefined") return "error.png";
  const path = `/src/assets/img/search/${name}`;
  const modules = import.meta.globEager(`/src/assets/img/search/*`);
  return (modules[path] as { default: string })?.default ?? "error.png";
};

const getSrcLeftPane = (name: string) => {
  if (typeof name === "undefined") return "error.png";
  const path = `/src/assets/img/leftPane/${name}`;
  const modules = import.meta.globEager(`/src/assets/img/leftPane/*`);
  return (modules[path] as { default: string })?.default ?? "error.png";
};

const getSrcSetting = (name: string) => {
  if (typeof name === "undefined") return "error.png";
  const path = `/src/assets/img/setting/${name}`;
  const modules = import.meta.globEager(`/src/assets/img/setting/*`);
  return (modules[path] as { default: string })?.default ?? "error.png";
};
const getSrcApps = (name: string) => {
  if (typeof name === "undefined") return "error.png";
  let folder = name.split("/");
  if (folder.length >= 1) {
    const path = `/src/assets/img/store/${name}`;
    let modules: any;
    switch (folder[0]) {
      case "apps":
        modules = import.meta.globEager(`/src/assets/img/store/apps/*`);
        break;
      case "float":
        modules = import.meta.globEager(`/src/assets/img/store/float/*`);
        break;
      case "games":
        modules = import.meta.globEager(`/src/assets/img/store/games/*`);
        break;
      case "movies":
        modules = import.meta.globEager(`/src/assets/img/store/movies/*`);
        break;

      default:
        break;
    }

    return (modules[path] as { default: string })?.default ?? "error.png";
  }
};

export {
  getSrcSettingTheme,
  getSrcStartIcon,
  getSrcIcon,
  getSrcIconUI,
  getSrcSearch,
  getSrcLeftPane,
  getSrcSetting,
  getSrcApps,
};
