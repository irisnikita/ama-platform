// Libraries
import {
  ErrorBlock as AntdErrorBlock,
  type ErrorBlockProps as AntdErrorBlockProps,
} from "antd-mobile";
import { InboxIcon } from "lucide-react";
import React, { useMemo } from "react";

export interface ErrorBlockProps extends AntdErrorBlockProps {
  /** An optional prop */
  optional?: string;
}

export const ErrorBlock: React.FC<ErrorBlockProps> = (props) => {
  // Memos
  const image = useMemo(() => {
    switch (props.status) {
      case "empty":
        return (
          <InboxIcon
            size={90}
            style={{
              color: "var(--adm-color-primary)",
            }}
          />
        );

      default:
        return undefined;
    }
  }, [props.status]);

  return <AntdErrorBlock image={image} {...props} />;
};
