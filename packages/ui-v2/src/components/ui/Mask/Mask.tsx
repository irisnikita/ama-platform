import { Mask as AntdMask, type MaskProps as AntdMaskProps } from "antd-mobile";
import React from "react";

export interface MaskProps extends AntdMaskProps {
  /** An optional prop */
  optional?: string;
}

export const Mask: React.FC<MaskProps> = (props) => {
  return <AntdMask {...props} />;
};
