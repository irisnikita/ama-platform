import {
  Image as AntdImage,
  type ImageProps as AntdImageProps,
} from "antd-mobile";

export interface ImageProps extends AntdImageProps {
  /** An optional prop */
  optional?: string;
}

export const Image: React.FC<ImageProps> = (props) => {
  return <AntdImage {...props} />;
};
