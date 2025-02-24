import {
  ImageViewer as AntdImageViewer,
  type ImageViewerProps as AntdImageViewerProps,
} from "antd-mobile";

interface ImageViewerProps extends AntdImageViewerProps {
  /** An optional prop */
  optional?: string;
}

const BaseImageViewer: React.FC<ImageViewerProps> = (props) => {
  return <AntdImageViewer {...props} />;
};

export const ImageViewer = BaseImageViewer as React.FC<ImageViewerProps> & {
  Multi: typeof AntdImageViewer.Multi;
};

ImageViewer.Multi = AntdImageViewer.Multi;
