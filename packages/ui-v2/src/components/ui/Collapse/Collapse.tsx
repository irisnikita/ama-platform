// Libraries
import {
  Collapse as AntdCollapse,
  type CollapseProps as AntdCollapseProps,
} from "antd-mobile";
import React from "react";

export type CollapseProps = AntdCollapseProps & {
  /** Optional */
  optional?: boolean;
};

const BaseCollapse: React.FC<CollapseProps> = (props) => {
  return <AntdCollapse {...props} />;
};

export const Collapse = BaseCollapse as React.FC<CollapseProps> & {
  Panel: typeof AntdCollapse.Panel;
};

Collapse.Panel = AntdCollapse.Panel;
