import React from 'react';
import { Input } from 'antd';
import { ITextArea } from './interface';
// import FormItem from './form-item'

export const textarea:React.SFC<ITextArea> = (props) => {
  const { value, onChange, className, id, type, ...resetProps } = props;

  return <Input.TextArea
    defaultValue={value}
    onChange={onChange}
    className={`view-engine-textarea component-textarea-${id || type} ${className || ''}`}
    {...resetProps}
  />
}