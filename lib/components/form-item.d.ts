import React from 'react';
import { ValidateStatus } from 'antd/lib/form/FormItem';
declare const FormItem: React.SFC<{
    help: string | number | undefined;
    status: ValidateStatus;
    showValidatorMsg: boolean;
}>;
export default FormItem;
