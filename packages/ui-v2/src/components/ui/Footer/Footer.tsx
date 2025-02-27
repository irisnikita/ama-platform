import React from "react";
import {
  Footer as AntdFooter,
  type FooterProps as AntdFooterProps,
} from "antd-mobile";
import type {
  ChipItem as ChipItemAntd,
  LinkItem as LinkItemAntd,
} from "antd-mobile/es/components/footer";

export interface FooterProps extends AntdFooterProps {
  /** An optional prop */
  optional?: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  return <AntdFooter {...props} />;
};

export { Footer, type ChipItemAntd as ChipItem, type LinkItemAntd as LinkItem };
