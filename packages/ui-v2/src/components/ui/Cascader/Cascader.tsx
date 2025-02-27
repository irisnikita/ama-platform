import React from "react";
import {
  Cascader as AntdCascader,
  type CascaderProps as AntdCascaderProps,
} from "antd-mobile";
import { CascaderOption as AntdCascaderOption } from "antd-mobile/es/components/cascader";

export interface CascaderProps extends AntdCascaderProps {
  /** An optional prop */
  optional?: string;
}

const BaseCascader: React.FC<CascaderProps> = (props) => {
  return <AntdCascader {...props} />;
};

const Cascader = BaseCascader as React.FC<CascaderProps> & {
  optionSkeleton: typeof AntdCascader.optionSkeleton;
  prompt: typeof AntdCascader.prompt;
};

Cascader.optionSkeleton = AntdCascader.optionSkeleton;
Cascader.prompt = AntdCascader.prompt;

export { Cascader, type AntdCascaderOption as CascaderOption };
