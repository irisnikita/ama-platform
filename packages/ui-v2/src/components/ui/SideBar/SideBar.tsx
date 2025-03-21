// Libraries
import {
  SideBar as AntdSideBar,
  type SideBarProps as AntdSideBarProps,
} from "antd-mobile";
import React from "react";

export interface SideBarProps extends AntdSideBarProps {
  /** Optional */
  optional?: boolean;
}

const BaseSideBar: React.FC<SideBarProps> = (props) => {
  return <AntdSideBar {...props} />;
};

export const SideBar = BaseSideBar as React.FC<SideBarProps> & {
  Item: typeof AntdSideBar.Item;
};

SideBar.Item = AntdSideBar.Item;
