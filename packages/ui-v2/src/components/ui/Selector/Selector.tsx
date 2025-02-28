import {
  Selector as AntdSelector,
  type SelectorProps as AntdSelectorProps,
  type SelectorOption as AntdSelectorOption,
} from "antd-mobile";

declare type SelectorValue = string | number;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface SelectorProps<V extends SelectorValue> extends AntdSelectorProps<V> {
  /** An optional prop */
  optional?: string;
}

const Selector = <V extends SelectorValue>(props: SelectorProps<V>) => {
  return <AntdSelector {...props} />;
};

export {
  type AntdSelectorOption as SelectorOption,
  type AntdSelectorProps as SelectorProps,
  Selector,
};
