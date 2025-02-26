import {
  ActionSheet as AntdActionSheet,
  type ActionSheetProps as AntdActionSheetProps,
} from "antd-mobile";

export interface ActionSheetProps extends AntdActionSheetProps {
  /** An optional prop */
  optional?: string;
}

export { AntdActionSheet as ActionSheet };
