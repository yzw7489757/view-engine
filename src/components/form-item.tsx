import * as React from 'react';
import { Form } from 'antd';

const { Item } = Form;

interface IFormItemProps {
  value: string | undefined | number | null;
}

const FormItem: React.SFC<IFormItemProps> = (props) => {
  const { children, value } = props
  return (
    <Item help={value} validateStatus={value? "error" : ''}>
      { 
        React.Children.map(children, child => child) 
      }
    </Item>
  );
};

export default FormItem;
