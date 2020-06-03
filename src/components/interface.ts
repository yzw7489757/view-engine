import { IViewDataItem, IViewDataItemProps } from '../interface';
import { TextAreaProps, InputProps } from 'antd/lib/input'
import { SelectProps, SelectValue} from 'antd/lib/select/index.d';
import { InputNumberProps } from 'antd/lib/input-number';
import { ButtonProps } from 'antd/lib/button';
import { TagProps } from 'antd/lib/tag';

export type BaseComponentProps<T> = Partial<IViewDataItemProps & Omit<IViewDataItem, 'props'> & T>

export type IText = BaseComponentProps<TextAreaProps>;
export type ITextArea = BaseComponentProps<TextAreaProps>;
export type IInput = BaseComponentProps<Omit<InputProps, 'value'> & { value: string | number | undefined }>;
export type ISelect = BaseComponentProps<SelectProps<SelectValue>>;
export type IInputNumber = BaseComponentProps<InputNumberProps>;
export type IButton = BaseComponentProps<ButtonProps>;
export type ITag = BaseComponentProps<TagProps>;