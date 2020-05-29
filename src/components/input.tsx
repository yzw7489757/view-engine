import React from 'react';
import { Input } from 'antd';

const input:React.SFC<any> = (props) => {
  const { value, onChange, ...resetProps } = props;
  return <Input
    defaultValue={value}
    onChange={onChange}
    {...resetProps}
  />
}

export default input