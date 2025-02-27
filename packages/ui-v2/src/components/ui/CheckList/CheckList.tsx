import React from "react";
import {
  CheckList as AntdCheckList,
  type CheckListProps as AntdCheckListProps,
} from "antd-mobile";

export interface CheckListProps extends AntdCheckListProps {
  /** An optional prop */
  optional?: string;
}

const BaseCheckList: React.FC<CheckListProps> = (props) => {
  return <AntdCheckList {...props} />;
};

export const CheckList = BaseCheckList as React.FC<CheckListProps> & {
  Item: typeof AntdCheckList.Item;
};

CheckList.Item = AntdCheckList.Item;
