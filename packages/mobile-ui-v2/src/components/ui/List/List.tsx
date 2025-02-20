// Libraries
import { List as AntdList, type ListProps as AntdListProps } from "antd-mobile";

interface ListProps extends AntdListProps {
  /** Optional */
  optional?: boolean;
}

const BaseList: React.FC<ListProps> = (props) => {
  return <AntdList {...props} />;
};

export const List = BaseList as React.FC<ListProps> & {
  Item: typeof AntdList.Item;
};

List.Item = AntdList.Item;
