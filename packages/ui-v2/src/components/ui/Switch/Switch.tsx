import {
  Switch as AntdSwitch,
  type SwitchProps as AntdSwitchProps,
} from "antd-mobile";
import React from "react";

export interface SwitchProps extends AntdSwitchProps {
  /** An optional prop */
  optional?: string;
}

export const Switch: React.FC<SwitchProps> = (props) => {
  return <AntdSwitch {...props} />;
};
