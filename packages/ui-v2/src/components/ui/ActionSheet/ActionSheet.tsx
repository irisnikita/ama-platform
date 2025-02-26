import {
  ActionSheet as AntdActionSheet,
  type ActionSheetProps as AntdActionSheetProps,
} from "antd-mobile";
import type {
  Action as ActionAntd,
  ActionSheetShowHandler as ActionSheetShowHandlerAntd,
} from "antd-mobile/es/components/action-sheet";

export interface ActionSheetProps extends AntdActionSheetProps {
  /** An optional prop */
  optional?: string;
}

type ActionSheetType = React.FC<ActionSheetProps> & {
  show: typeof AntdActionSheet.show;
};

// const ActionSheet: React.FC<AntdActionSheetProps> = (props) => {
//   return <AntdActionSheet {...props} />;
// };

const ActionSheet: ActionSheetType = ((props) => {
  return <AntdActionSheet {...props} />;
}) as ActionSheetType;

ActionSheet.show = AntdActionSheet.show;

export {
  ActionSheet,
  type ActionSheetShowHandlerAntd as ActionSheetShowHandler,
  type ActionAntd as Action,
};
