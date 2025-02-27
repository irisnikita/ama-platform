import {
  Dialog as AntdDialog,
  type DialogShowProps as AntdDialogProps,
} from "antd-mobile";

import { DialogShowHandler } from "antd-mobile/es/components/dialog";

export interface DialogProps extends AntdDialogProps {
  /** An optional prop */
  optional?: string;
}

export { AntdDialog as Dialog, type DialogShowHandler };
