// Libraries
import {
  Skeleton as AntdSkeleton,
  type SkeletonProps as AntdSkeletonProps,
} from "antd-mobile";

export interface SkeletonProps extends AntdSkeletonProps {}
export type { SkeletonTitleProps } from "antd-mobile";

const BaseSkeleton: React.FC<SkeletonProps> = (props) => {
  return <AntdSkeleton {...props} />;
};

export const Skeleton = BaseSkeleton as React.FC<SkeletonProps> & {
  Title: typeof AntdSkeleton.Title;
  Paragraph: typeof AntdSkeleton.Paragraph;
};

Skeleton.Title = AntdSkeleton.Title;
Skeleton.Paragraph = AntdSkeleton.Paragraph;
