import {
  TextArea as AntdTextArea,
  type TextAreaProps as AntdTextAreaProps,
} from "antd-mobile";
import React from "react";

export interface TextAreaProps extends AntdTextAreaProps {
  /** An optional prop */
  optional?: string;
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return <AntdTextArea {...props} />;
};
