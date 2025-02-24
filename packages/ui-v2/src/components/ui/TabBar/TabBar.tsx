// Libraries
import {
  TabBar as AntdTabBar,
  type TabBarProps as AntdTabBarProps,
} from "antd-mobile";

interface TabBarProps extends AntdTabBarProps {
  /** Optional */
  optional?: boolean;
}

const BaseTabBar: React.FC<TabBarProps> = (props) => {
  return <AntdTabBar {...props} />;
};

export const TabBar = BaseTabBar as React.FC<TabBarProps> & {
  Item: typeof AntdTabBar.Item;
};

TabBar.Item = AntdTabBar.Item;
