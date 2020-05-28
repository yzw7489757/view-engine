import React from 'react';
import { Select } from 'antd';

const select = (props) => {
  const { options = [], ...resetProps } = props
  return (
    <Select options={options} {...resetProps}></Select>
  );
}

export default select;
