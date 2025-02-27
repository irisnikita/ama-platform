import {
  PullToRefresh as AntdPullToRefresh,
  type PullToRefreshProps as AntdPullToRefreshProps,
} from "antd-mobile";
import { type PullStatus } from "antd-mobile/es/components/pull-to-refresh";
import React from "react";

export interface PullToRefreshProps extends AntdPullToRefreshProps {
  /** An optional prop */
  optional?: string;
}

export const PullToRefresh: React.FC<PullToRefreshProps> = (props) => {
  return <AntdPullToRefresh {...props} />;
};

export { type PullStatus };
