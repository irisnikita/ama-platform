// Libraries
import {
  Steps as AntdSteps,
  type StepsProps as AntdStepsProps,
} from "antd-mobile";
import React from "react";

export interface StepsProps extends AntdStepsProps {
  /** Optional */
  optional?: boolean;
}

const BaseSteps: React.FC<StepsProps> = (props) => {
  return <AntdSteps {...props} />;
};

export const Steps = BaseSteps as React.FC<StepsProps> & {
  Step: typeof AntdSteps.Step;
};

Steps.Step = AntdSteps.Step;
