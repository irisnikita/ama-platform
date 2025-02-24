// Libraries
import {
  JumboTabs as AntdJumboTabs,
  type JumboTabsProps as AntdJumboTabsProps,
} from "antd-mobile";

interface JumboTabsProps extends AntdJumboTabsProps {
  /** Optional */
  optional?: boolean;
}

const BaseJumboTabs: React.FC<JumboTabsProps> = (props) => {
  return <AntdJumboTabs {...props} />;
};

export const JumboTabs = BaseJumboTabs as React.FC<JumboTabsProps> & {
  Tab: typeof AntdJumboTabs.Tab;
};

JumboTabs.Tab = AntdJumboTabs.Tab;
