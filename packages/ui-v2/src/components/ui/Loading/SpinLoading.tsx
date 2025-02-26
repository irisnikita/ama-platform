import {
  SpinLoading as AntdSpinLoading,
  type SpinLoadingProps as AntdSpinLoadingProps,
} from "antd-mobile";
import React from "react";

export interface SpinLoadingProps extends AntdSpinLoadingProps {
  /** An optional prop */
  optional?: string;
}

export const SpinLoading: React.FC<SpinLoadingProps> = (props) => {
  return <AntdSpinLoading {...props} />;
};
