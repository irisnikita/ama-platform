import {
  SafeArea as AntdSafeArea,
  type SafeAreaProps as AntdSafeAreaProps,
} from "antd-mobile";
import React from "react";

export interface SafeAreaProps extends AntdSafeAreaProps {
  /** An optional prop */
  optional?: string;
}

export const SafeArea: React.FC<SafeAreaProps> = (props) => {
  return <AntdSafeArea {...props} />;
};
