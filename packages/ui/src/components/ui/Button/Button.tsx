import {
  Button as AntdButton,
  type ButtonProps as AntdButtonProps,
} from "antd";
import { forwardRef } from "react";

export interface ButtonProps extends AntdButtonProps {
  /** An optional prop */
  optional?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <AntdButton {...props} ref={ref} />;
  }
);
