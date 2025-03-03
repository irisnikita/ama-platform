// Libraries
import {
  Popover as AntdPopover,
  type PopoverProps as AntdPopoverProps,
} from "antd-mobile";
import React from "react";

export interface PopoverProps extends AntdPopoverProps {
  /** Optional */
  optional?: boolean;
}

const BasePopover: React.FC<PopoverProps> = (props) => {
  return <AntdPopover {...props} />;
};

export const Popover = BasePopover as React.FC<PopoverProps> & {
  Menu: typeof AntdPopover.Menu;
};

Popover.Menu = AntdPopover.Menu;
