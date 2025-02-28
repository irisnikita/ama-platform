import { Rate as AntdRate, type RateProps as AntdRateProps } from "antd-mobile";
import React from "react";

export interface RateProps extends AntdRateProps {
  /** An optional prop */
  optional?: string;
}

export const Rate: React.FC<RateProps> = (props) => {
  return <AntdRate {...props} />;
};
