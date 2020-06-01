import React from 'react';
import { InputNumber } from 'antd';
import { IInputNumber } from './interface';
import { toNumber } from '../utils/index';

export const inputNumber:React.SFC<IInputNumber> = (props) => {
  const { value, onChange, className, id, type, ...resetProps } = props;
  return <InputNumber
    defaultValue={toNumber(value)}
    onChange={onChange}
    className={`view-engine-inputnumber component-inputnumber-${id || type} ${className || ''}`}
    {...resetProps}
  />
}