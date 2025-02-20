import {
  Space as AntdSpace,
  type SpaceProps as AntdSpaceProps,
} from "antd-mobile";

interface SpaceProps extends AntdSpaceProps {
  /** An optional prop */
  optional?: string;
}

export const Space: React.FC<SpaceProps> = (props) => {
  return <AntdSpace {...props} />;
};
