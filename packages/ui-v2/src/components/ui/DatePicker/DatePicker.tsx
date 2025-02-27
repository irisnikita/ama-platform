import {
  DatePicker as AntdDatePicker,
  type DatePickerProps as AntdDatePickerProps,
} from "antd-mobile";
import React, { useCallback } from "react";

export interface DatePickerProps extends AntdDatePickerProps {
  /** An optional prop */
  optional?: string;
}

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  // Renders
  const labelRender = useCallback((type: string, data: number) => {
    switch (type) {
      case "month":
        return `Tháng ${data}`;
      // case "year":
      //   return `Năm ${data}`;
      // case "day":
      //   return `Ngày ${data}`;
      default:
        return data;
    }
  }, []);

  return <AntdDatePicker renderLabel={labelRender} {...props} />;
};
