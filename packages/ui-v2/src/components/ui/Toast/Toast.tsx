import {
  Toast as AntdToast,
  type ToastShowProps as AntdToastProps,
} from "antd-mobile";

import { ToastHandler } from "antd-mobile/es/components/toast";

export interface ToastProps extends AntdToastProps {
  /** An optional prop */
  optional?: string;
}

export { AntdToast as Toast, type ToastHandler };
