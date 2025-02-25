import {
  Avatar as AntdAvatar,
  type AvatarProps as AntdAvatarProps,
} from "antd-mobile";

export interface AvatarProps extends AntdAvatarProps {
  /** An optional prop */
  optional?: string;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <AntdAvatar {...props} />;
};
