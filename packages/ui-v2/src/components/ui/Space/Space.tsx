import React from "react";
import {
  Space as AntdSpace,
  type SpaceProps as AntdSpaceProps,
} from "antd-mobile";

export interface SpaceProps extends AntdSpaceProps {
  /** An optional prop */
  optional?: string;
}

export const Space: React.FC<SpaceProps> = (props) => {
  return <AntdSpace {...props} />;
};
