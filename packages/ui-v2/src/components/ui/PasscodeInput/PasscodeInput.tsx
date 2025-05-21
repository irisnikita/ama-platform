import {
  PasscodeInput as AntdPasscodeInput,
  type PasscodeInputProps as AntdPasscodeInputProps,
} from "antd-mobile";
import React from "react";

export interface PasscodeInputProps extends AntdPasscodeInputProps {
  /** An optional prop */
  optional?: string;
}

export const PasscodeInput: React.FC<PasscodeInputProps> = (props) => {
  return <AntdPasscodeInput {...props} />;
};
