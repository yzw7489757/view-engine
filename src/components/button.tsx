import React from 'react';
import { Button } from 'antd';
import { IButton } from './interface';

export const button:React.SFC<IButton> = (props) => {
  const { value, onClick, className, id, type, ...resetProps } = props;
  return <Button
    onClick={onClick}
    className={`view-engine-button component-button-${id || type} ${className || ''}`}
    {...resetProps}
  >{value}</Button>
}