import React from 'react';
import { Tag } from 'antd';
import { ITag } from './interface';

export const tag:React.SFC<ITag> = (props) => {
  const { value, onClick, className, id, type, ...resetProps } = props;
  return <Tag
    onClick={onClick}
    className={`view-engine-tag component-tag-${id || type} ${className || ''}`}
    {...resetProps}
  >{value}</Tag>
}