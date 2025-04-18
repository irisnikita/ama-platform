import {
  Image as AntdImage,
  type ImageProps as AntdImageProps,
} from "antd-mobile";
import React from "react";

export interface ImageProps extends AntdImageProps {
  /** An optional prop */
  optional?: string;
}

export const Image: React.FC<ImageProps> = (props) => {
  return <AntdImage {...props} />;
};
