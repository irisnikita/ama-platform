import {
  Popup as AntdPopup,
  type PopupProps as AntdPopupProps,
  CenterPopup as AntdCenterPopup,
  type CenterPopupProps as AntdCenterPopupProps,
} from "antd-mobile";
import React from "react";

export interface PopupProps extends AntdPopupProps {
  /** An optional prop */
  optional?: string;
}

export const Popup: React.FC<PopupProps> = (props) => {
  return <AntdPopup {...props} />;
};

export interface CenterPopupProps extends AntdCenterPopupProps {
  /** An optional prop */
  optional?: string;
}

export const CenterPopup: React.FC<CenterPopupProps> = (props) => {
  return <AntdCenterPopup {...props} />;
};
