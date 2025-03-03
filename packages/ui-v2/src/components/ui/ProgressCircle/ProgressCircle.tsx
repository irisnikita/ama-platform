import {
  ProgressCircle as AntdProgressCircle,
  type ProgressCircleProps as AntdProgressCircleProps,
} from "antd-mobile";
import React from "react";

export interface ProgressCircleProps extends AntdProgressCircleProps {
  /** An optional prop */
  optional?: string;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = (props) => {
  return <AntdProgressCircle {...props} />;
};
