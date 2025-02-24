import {
  NavBar as AntdNavBar,
  type NavBarProps as AntdNavBarProps,
} from "antd-mobile";
import React from "react";

export interface NavBarProps extends AntdNavBarProps {
  /** An optional prop */
  optional?: string;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  return <AntdNavBar {...props} />;
};
