import {
  Stepper as AntdStepper,
  type StepperProps as AntdStepperProps,
} from "antd-mobile";
import React from "react";

export type StepperProps = AntdStepperProps & {};

export const Stepper: React.FC<StepperProps> = (props) => {
  return <AntdStepper {...props} />;
};
