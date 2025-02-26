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
  ErrorBlock: {
    ...viVN.ErrorBlock,
    empty: {
      title: "Không có dữ liệu",
      description: "Hiện tại không có dữ liệu, xin vui lòng thử lại sau.",
    },
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
