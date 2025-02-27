import {
  WaterMark as AntdWaterMark,
  type WaterMarkProps as AntdWaterMarkProps,
} from "antd-mobile";
import React from "react";

export interface WaterMarkProps extends AntdWaterMarkProps {
  /** An optional prop */
  optional?: string;
}

export const WaterMark: React.FC<WaterMarkProps> = (props) => {
  return <AntdWaterMark {...props} />;
};
