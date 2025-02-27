// Libraries
import React from "react";
import {
  CapsuleTabs as AntdCapsuleTabs,
  CapsuleTabsProps as AntdCapsuleTabsProps,
} from "antd-mobile";

export interface CapsuleTabsProps extends AntdCapsuleTabsProps {}

const BaseCapsuleTabs: React.FC<CapsuleTabsProps> = (props) => {
  return <AntdCapsuleTabs {...props} />;
};

export const CapsuleTabs = BaseCapsuleTabs as React.FC<CapsuleTabsProps> & {
  Tab: typeof AntdCapsuleTabs.Tab;
};

CapsuleTabs.Tab = AntdCapsuleTabs.Tab;
