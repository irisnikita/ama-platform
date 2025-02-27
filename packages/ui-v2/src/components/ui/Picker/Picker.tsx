import {
  Picker as AntdPicker,
  PickerProps as AntdPickerProps,
} from "antd-mobile";
import React from "react";

export interface PickerProps extends AntdPickerProps {}

export const Picker: React.FC<PickerProps> = (props) => {
  return <AntdPicker {...props} />;
};
