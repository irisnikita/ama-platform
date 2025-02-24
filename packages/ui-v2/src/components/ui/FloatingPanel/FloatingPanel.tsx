import {
  FloatingPanel as AntdFloatingPanel,
  type FloatingPanelProps as AntdFloatingPanelProps,
} from "antd-mobile";

interface FloatingPanelProps extends AntdFloatingPanelProps {
  /** An optional prop */
  optional?: string;
}

export const FloatingPanel: React.FC<FloatingPanelProps> = (props) => {
  return <AntdFloatingPanel {...props} />;
};
