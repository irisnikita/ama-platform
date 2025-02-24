import { Grid as AntdGrid, type GridProps as AntdGridProps } from "antd-mobile";
import React from "react";

export interface GridProps extends AntdGridProps {
  /** An optional prop */
  optional?: string;
}

const BaseGrid: React.FC<GridProps> = (props) => {
  return <AntdGrid {...props} />;
};

export const Grid = BaseGrid as React.FC<GridProps> & {
  Item: typeof AntdGrid.Item;
};

Grid.Item = AntdGrid.Item;
