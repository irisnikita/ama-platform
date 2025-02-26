import {
  Segmented as AntdSegmented,
  type SegmentedProps as AntdSegmentedProps,
} from "antd-mobile";
import React from "react";

export interface SegmentedProps extends AntdSegmentedProps {
  /** An optional prop */
  optional?: string;
}

export const Segmented: React.FC<SegmentedProps> = (props) => {
  return <AntdSegmented {...props} />;
};
