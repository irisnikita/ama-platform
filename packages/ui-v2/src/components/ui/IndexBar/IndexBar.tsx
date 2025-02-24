import {
  IndexBar as AntdIndexBar,
  type IndexBarProps as AntdIndexBarProps,
  type IndexBarRef as AntdIndexBarRef,
} from "antd-mobile";
import { forwardRef } from "react";

export interface IndexBarProps extends AntdIndexBarProps {
  /** An optional prop */
  optional?: string;
}

export type IndexBarRef = AntdIndexBarRef;

const BaseIndexBar = forwardRef<IndexBarRef, IndexBarProps>((props, ref) => {
  return <AntdIndexBar ref={ref} {...props} />;
});

export const IndexBar = BaseIndexBar as unknown as typeof BaseIndexBar & {
  Panel: typeof AntdIndexBar.Panel;
};

IndexBar.Panel = AntdIndexBar.Panel;
