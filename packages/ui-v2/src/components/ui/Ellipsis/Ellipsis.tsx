import {
  Ellipsis as AntdEllipsis,
  type EllipsisProps as AntdEllipsisProps,
} from "antd-mobile";

export interface EllipsisProps extends AntdEllipsisProps {
  /** An optional prop */
  optional?: string;
}

export const Ellipsis: React.FC<EllipsisProps> = (props) => {
  return <AntdEllipsis {...props} />;
};
