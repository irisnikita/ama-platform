import React from "react";
import { Form as AntdForm, type FormProps as AntdFormProps } from "antd-mobile";

export interface FormProps extends AntdFormProps {
  /** An optional prop */
  optional?: string;
}

const BaseForm: React.FC<FormProps> = (props) => {
  return <AntdForm {...props} />;
};

export const Form = BaseForm as React.FC<FormProps> & {
  Item: typeof AntdForm.Item;
  useForm: typeof AntdForm.useForm;
  useWatch: typeof AntdForm.useWatch;
};

Form.Item = AntdForm.Item;
Form.useForm = AntdForm.useForm;
Form.useWatch = AntdForm.useWatch;
