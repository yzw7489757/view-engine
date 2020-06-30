import React, { ReactElement } from 'react';
import { Form } from 'antd'
import { ValidateStatus } from 'antd/lib/form/FormItem';

const FormItem: React.SFC<{ 
  help: string | number | undefined, 
  status: ValidateStatus, 
  showValidatorMsg: boolean 
}> = ({ children, help, status, showValidatorMsg }) => {

  if(showValidatorMsg === false) return children as ReactElement
  return (
    <Form.Item help={help} validateStatus={status}>
      { children }
    </Form.Item>
  );
}

export default FormItem;
