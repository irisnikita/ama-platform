// Libraries
import React from "react";

// Globals
import { initializeZmaGlobals } from "@/utils";

// Hooks
import { useReceivePostMessage } from "@/hooks";

initializeZmaGlobals();

interface CoreProviderProps extends React.PropsWithChildren<{}> {}

export const CoreProvider: React.FC<CoreProviderProps> = (props) => {
  const { children } = props;

  useReceivePostMessage();

  return children;
};
