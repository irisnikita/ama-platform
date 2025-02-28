// Libraries
import {
  Radio as AntdRadio,
  type RadioProps as AntdRadioProps,
} from "antd-mobile";
import React from "react";

export interface RadioProps extends AntdRadioProps {
  /** Optional */
  optional?: boolean;
}

const BaseRadio: React.FC<RadioProps> = (props) => {
  return <AntdRadio {...props} />;
};

export const Radio = BaseRadio as React.FC<RadioProps> & {
  Group: typeof AntdRadio.Group;
};

Radio.Group = AntdRadio.Group;
