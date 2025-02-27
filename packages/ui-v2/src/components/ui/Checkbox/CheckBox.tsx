import {
  Checkbox as AntdCheckbox,
  type CheckboxProps as AntdCheckboxProps,
  type CheckboxRef as AntdCheckboxRef,
} from "antd-mobile";
import { forwardRef } from "react";

export interface CheckboxProps extends AntdCheckboxProps {
  /** An optional prop */
  optional?: string;
}

export type CheckboxRef = AntdCheckboxRef;

const BaseCheckbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  return <AntdCheckbox ref={ref} {...props} />;
});

export const Checkbox = BaseCheckbox as unknown as typeof BaseCheckbox & {
  Group: typeof AntdCheckbox.Group;
};

Checkbox.Group = AntdCheckbox.Group;
