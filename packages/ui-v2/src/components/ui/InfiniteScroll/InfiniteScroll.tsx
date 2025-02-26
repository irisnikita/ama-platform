import {
  InfiniteScroll as AntdInfiniteScroll,
  type InfiniteScrollProps as AntdInfiniteScrollProps,
} from "antd-mobile";
import React from "react";

export interface InfiniteScrollProps extends AntdInfiniteScrollProps {
  /** An optional prop */
  optional?: string;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = (props) => {
  return <AntdInfiniteScroll {...props} />;
};
