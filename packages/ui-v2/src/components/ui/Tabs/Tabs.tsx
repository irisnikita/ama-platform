// Libraries
import { Tabs as AntdTabs, type TabsProps as AntdTabsProps } from "antd-mobile";
import React from "react";

export interface TabsProps extends AntdTabsProps {
  /** Optional */
  optional?: boolean;
}

const BaseTabs: React.FC<TabsProps> = (props) => {
  return <AntdTabs {...props} />;
};

export const Tabs = BaseTabs as React.FC<TabsProps> & {
  Tab: typeof AntdTabs.Tab;
};

Tabs.Tab = AntdTabs.Tab;
