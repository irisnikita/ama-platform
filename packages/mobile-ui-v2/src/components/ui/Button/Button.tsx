// import {
//   Button as AntdButton,
//   type ButtonProps as AntdButtonProps,
// } from "antd-mobile";
// import { forwardRef } from "react";

// export interface ButtonProps extends AntdButtonProps {
//   /** An optional prop */
//   optional?: string;
// }

// export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   (props, ref) => {
//     return <AntdButton {...props} ref={ref} />;
//   }
// );

import {
  Button as AntdButton,
  type ButtonProps as AntdButtonProps,
} from "antd-mobile";
import { useCallback } from "react";

export interface ButtonProps extends AntdButtonProps {
  /** An optional icon */
  icon?: React.ReactNode;
  /** An optional icon position */
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, icon, iconPosition = "left", ...restOfProps } = props;

  const renderButtonContent = useCallback(() => {
    const nodeItems: React.ReactNode[] = [<span>{children}</span>];

    if (icon) {
      if (iconPosition === "left") {
        nodeItems.unshift(icon);
      } else {
        nodeItems.push(icon);
      }
    }

    return nodeItems;
  }, [children, icon, iconPosition]);

  return (
    <AntdButton {...restOfProps}>
      <div className="am-flex am-items-center am-gap-2">
        {renderButtonContent()}
      </div>
    </AntdButton>
  );
};
