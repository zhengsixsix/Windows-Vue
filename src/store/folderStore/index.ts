import { defineStore } from "pinia";
interface STATE {
  storeCurrentFolder: any;
  storeCompletedFolder: any[];
}
const useFolderStore = defineStore("folderStore", {
  state: (): STATE => {
    return {
      storeCurrentFolder: {},
      storeCompletedFolder: [],
    };
  },
  getters: {},
  actions: {
    cacheCompletedFolder(Folders: any[]) {
      this.storeCompletedFolder = Folders;
    },
  },
});
export default useFolderStore;
