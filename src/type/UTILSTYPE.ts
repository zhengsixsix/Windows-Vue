import type { ShallowRef, DefineComponent } from "vue";
export type COMPONENT = ShallowRef<
  DefineComponent<
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    string,
    any,
    Readonly<{}>,
    Record<never, any>
  >
>;

export type NodeWithChildren<T> = {
  children: T extends { children: any[] }
    ? Array<NodeWithChildren<T["children"][number]>>
    : never;
};
interface NodeWithName {
  name: string;
}
interface Children extends NodeWithName {
  posIdx?: number;
  extension?: string;
  size?: string;
}
export type WithChildren<T> = T &
  NodeWithChildren<T> & { children: Array<Children> };
