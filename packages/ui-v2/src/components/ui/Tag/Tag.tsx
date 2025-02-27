import { Tag as AntdTag, type TagProps as AntdTagProps } from "antd-mobile";
import React from "react";

export interface TagProps extends AntdTagProps {
  /** An optional prop */
  optional?: string;
}

export const Tag: React.FC<TagProps> = (props) => {
  return <AntdTag {...props} />;
};
