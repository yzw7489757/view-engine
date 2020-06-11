import { IViewDataItem, IViewDataItemProps } from '../interface';
import { TextAreaProps, InputProps } from 'antd/lib/input';
import { SelectProps, SelectValue } from 'antd/lib/select/index.d';
import { InputNumberProps } from 'antd/lib/input-number';
import { ButtonProps } from 'antd/lib/button';
import { TagProps } from 'antd/lib/tag';
export declare type BaseComponentProps<T> = Partial<IViewDataItemProps & Omit<IViewDataItem, 'props'> & T>;
export declare type PlainValue<T> = Omit<T, 'value'> & {
    value: string | number | undefined;
};
export declare type IText = PlainValue<BaseComponentProps<TextAreaProps>>;
export declare type ITextArea = PlainValue<BaseComponentProps<TextAreaProps>>;
export declare type IInput = PlainValue<BaseComponentProps<InputProps>>;
export declare type ISelect = PlainValue<BaseComponentProps<SelectProps<SelectValue>>>;
export declare type IInputNumber = PlainValue<BaseComponentProps<InputNumberProps>>;
export declare type IButton = BaseComponentProps<ButtonProps>;
export declare type ITag = BaseComponentProps<TagProps>;
