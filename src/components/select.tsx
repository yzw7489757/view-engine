import React from 'react';
import { Select } from 'antd';
import { ISelect } from './interface';

export const select:React.SFC<ISelect> = (props) => {
  const { options = [], value,className, id, type, ...resetProps } = props;
  return (
    <Select  
      options={options} 
      defaultValue={value} 
      className={`view-engine-select component-select-${id || type} ${className || ''}`}
      {...resetProps} />
  );
}

