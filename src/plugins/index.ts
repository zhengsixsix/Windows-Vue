type CmponentsPool = { name: string; [key: string]: any };
import type { App } from "vue";
const componentFile: Record<string, { default: any }> = import.meta.globEager(
  "./**/index.vue"
);

const componentsPool: Array<CmponentsPool> = [];
for (const comp in componentFile) {
  componentFile[comp].default["name"] = comp.split("/")[1];
  componentsPool.push(componentFile[comp].default);
}

export default {
  install(app: App, options?: { components: Array<string> }) {
    if (options && options.components) {
      options.components.forEach((compName: string) => {
        componentsPool.forEach((comp: CmponentsPool) => {
          if (compName === comp.name) {
            app.component(comp.name, comp);
          }
        });
      });
    } else {
      componentsPool.forEach((comp) => {
        app.component(comp.name, comp);
      });
    }
  },
};
