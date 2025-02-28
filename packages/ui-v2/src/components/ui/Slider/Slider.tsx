import {
  Slider as AntdSlider,
  type SliderProps as AntdSliderProps,
} from "antd-mobile";
import React from "react";

export interface SliderProps extends AntdSliderProps {
  /** An optional prop */
  optional?: string;
}

export const Slider: React.FC<SliderProps> = (props) => {
  return <AntdSlider {...props} />;
};
