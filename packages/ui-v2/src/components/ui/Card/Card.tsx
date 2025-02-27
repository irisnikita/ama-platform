import { Card as AntdCard, type CardProps as AntdCardProps } from "antd-mobile";
import React from "react";

export interface CardProps extends AntdCardProps {
  /** An optional prop */
  optional?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  return <AntdCard {...props} />;
};
