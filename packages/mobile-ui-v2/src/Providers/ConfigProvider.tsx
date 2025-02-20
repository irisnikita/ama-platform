// Libraries
import React from "react";
import {
  ConfigProvider as AntdConfigProvider,
  type ConfigProviderProps as AntdConfigProviderProps,
} from "antd-mobile";
import viVN from "antd-mobile/es/locales/vi-VN";

interface ConfigProviderProps extends AntdConfigProviderProps {
  /** An optional prop */
  optional?: string;
}

const locale = {
  ...viVN,
  common: {
    ...viVN.common,
    confirm: "Xác nhận",
  },
};

export const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <AntdConfigProvider {...restProps} locale={locale}>
      {children}
    </AntdConfigProvider>
  );
};
