import React from 'react';
import { Input } from 'antd';
import { ITextArea } from './interface';

export const textarea:React.SFC<ITextArea> = (props) => {
  const { value, onChange, className, id, type, ...resetProps } = props;

  return <Input.TextArea
    defaultValue={value}
    onChange={onChange}
    rows={5}
    autoSize={{minRows: 3, maxRows: 10}}
    className={`view-engine-textarea component-textarea-${id || type} ${className || ''}`}
    {...resetProps}
  />
}