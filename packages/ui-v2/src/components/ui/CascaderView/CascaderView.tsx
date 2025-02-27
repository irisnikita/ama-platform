import React from "react";
import {
  CascaderView as AntdCascaderView,
  type CascaderViewProps as AntdCascaderViewProps,
} from "antd-mobile";

export interface CascaderViewProps extends AntdCascaderViewProps {
  /** An optional prop */
  optional?: string;
}

const BaseCascaderView: React.FC<CascaderViewProps> = (props) => {
  return <AntdCascaderView {...props} />;
};

export const CascaderView = BaseCascaderView as React.FC<CascaderViewProps> & {
  optionSkeleton: typeof AntdCascaderView.optionSkeleton;
};

CascaderView.optionSkeleton = AntdCascaderView.optionSkeleton;
