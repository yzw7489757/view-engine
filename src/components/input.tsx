import React from 'react';
import { Input } from 'antd';
import { IInput } from './interface';

export const input:React.SFC<IInput> = (props) => {
  const { value, onChange, className, id, type, ...resetProps } = props;
  return <Input
    defaultValue={value}
    onChange={onChange}
    className={`view-engine-input component-input-${id || type} ${className || ''}`}
    {...resetProps}
  />
}