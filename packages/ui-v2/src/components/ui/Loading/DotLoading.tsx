import {
  DotLoading as AntdDotLoading,
  type DotLoadingProps as AntdDotLoadingProps,
} from "antd-mobile";
import React from "react";

export interface DotLoadingProps extends AntdDotLoadingProps {
  /** An optional prop */
  optional?: string;
}

export const DotLoading: React.FC<DotLoadingProps> = (props) => {
  return <AntdDotLoading {...props} />;
};
