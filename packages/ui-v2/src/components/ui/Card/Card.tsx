import { Card as AntdCard, type CardProps as AntdCardProps } from "antd-mobile";

interface CardProps extends AntdCardProps {
  /** An optional prop */
  optional?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  return <AntdCard {...props} />;
};
