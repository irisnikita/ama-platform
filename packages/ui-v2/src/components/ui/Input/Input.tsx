// Libraries
import { Input as AntdInput, InputProps as AntdInputProps } from "antd-mobile";
import React from "react";

export interface InputProps extends AntdInputProps {}

export const Input: React.FC<InputProps> = (props) => {
  return <AntdInput {...props} />;
};
