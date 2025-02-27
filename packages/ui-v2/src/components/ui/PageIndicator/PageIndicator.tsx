import {
  PageIndicator as AntdPageIndicator,
  type PageIndicatorProps as AntdPageIndicatorProps,
} from "antd-mobile";
import React from "react";

export interface PageIndicatorProps extends AntdPageIndicatorProps {
  /** An optional prop */
  optional?: string;
}

export const PageIndicator: React.FC<PageIndicatorProps> = (props) => {
  return <AntdPageIndicator {...props} />;
};
