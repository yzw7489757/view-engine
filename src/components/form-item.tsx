import React from 'react';
import { Form } from 'antd'
import { ValidateStatus } from 'antd/lib/form/FormItem';
import { IViewDataItemProps } from '../interface';

const FormItem: React.SFC<{ 
  status?: ValidateStatus, 
  showValidatorMsg?: boolean 
} & IViewDataItemProps > = ({ children, status = '', showValidatorMsg, errorMsg }) => {
  return (
    <Form.Item
      validateStatus={ (showValidatorMsg !== false && errorMsg) ? 'error': status}
      help={(showValidatorMsg !== false && errorMsg) ? errorMsg : ''}
    >
      { children }
    </Form.Item>
  );
}

export default FormItem;
