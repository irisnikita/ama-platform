// Libraries
import React from "react";
import {
  ConfigProvider as AntdConfigProvider,
  ConfigProviderProps as AntdConfigProviderProps,
} from "antd";

// Themes
import { THEME } from "@/constants";

export const ConfigProvider: React.FC<AntdConfigProviderProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <AntdConfigProvider theme={THEME} prefixCls="ama" {...restProps}>
      {children}
    </AntdConfigProvider>
  );
};
