import React from 'react';
import { Input as _Input } from 'antd';
import { IText } from './interface';

export const text:React.SFC<IText> = (props) => {
  console.log('props: ', props);
  const { value, className, id, type, ...resetProps } = props;
  return (
    <span 
    className={`view-engine-text component-text-${id || type} ${className || ''}`} 
    {...resetProps}>{value}</span>)
}