import React from "react";
import {
  Badge as AntdBadge,
  type BadgeProps as AntdBadgeProps,
} from "antd-mobile";

export interface BadgeProps extends AntdBadgeProps {
  /** An optional prop */
  optional?: string;
}

const BaseBadge: React.FC<BadgeProps> = (props) => {
  return <AntdBadge {...props} />;
};

export const Badge = BaseBadge as React.FC<BadgeProps> & {
  dot: typeof AntdBadge.dot;
};

Badge.dot = AntdBadge.dot;
