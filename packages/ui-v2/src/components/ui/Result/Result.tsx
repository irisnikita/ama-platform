import {
  Result as AntdResult,
  type ResultProps as AntdResultProps,
} from "antd-mobile";
import React from "react";

export interface ResultProps extends AntdResultProps {
  /** An optional prop */
  optional?: string;
}

export const Result: React.FC<ResultProps> = (props) => {
  return <AntdResult {...props} />;
};
