import {
  Divider as AntdDivider,
  type DividerProps as AntdDividerProps,
} from "antd-mobile";
import React from "react";

export interface DividerProps extends AntdDividerProps {
  /** An optional prop */
  optional?: string;
}

export const Divider: React.FC<DividerProps> = (props) => {
  return <AntdDivider {...props} />;
};
