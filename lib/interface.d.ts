/// <reference types="react" />
import * as presetComponents from './components/index';
export declare class ViewEngineProps {
    onClick: (...args: any[]) => void;
    onSubmit: (...args: any[]) => void;
    onChange: (...args: any[]) => void;
    customComponents: Record<string, React.ReactNode>;
    viewData: IViewData;
    viewLayout: IViewLayout;
    style: Record<string, string>;
    className: string;
    noneLabel: boolean;
    disabled: boolean;
}
export interface IEventsMap {
    handleClick: IEventHandler;
    handleChange: IEventHandler;
    handleSubmit: IEventHandler;
}
export interface IViewData {
    [id: string]: IViewDataItem;
}
export interface IViewDataItem {
    id?: string;
    type?: keyof typeof presetComponents | string;
    label?: string;
    customLabel?: (props: IViewDataItem) => React.ReactNode;
    span?: number;
    props?: IViewDataItemProps & Record<string, any>;
    children?: IViewData;
    hidden?: boolean;
    layout?: IViewLayout;
}
export interface IViewDataItemProps {
    value?: string | number | undefined | Array<string | number>;
    disable?: boolean;
    className?: string;
    style?: React.CSSProperties;
    options?: Array<Record<string, string | number>>;
}
declare type RecursiveArray<T> = Array<T | RecursiveArray<T>>;
interface ArrayLike<T> {
    readonly length: number;
    readonly [n: number]: T;
}
declare type RecursiveArraysList<T> = ArrayLike<T | RecursiveArray<T>>;
export declare type IViewLayout = RecursiveArraysList<string>;
export interface DiffViewData {
    value: any;
    type?: string;
    label?: string;
}
export declare type IEventHandler = (id: string, diffs: DiffViewData, componentName: string, itemProps: IViewDataItemProps) => void;
export interface LayoutSchema {
    title: string | React.ReactNode;
    label: string;
    name: string | null;
    span: number;
    className: string;
    children?: LayoutSchema[];
}
export {};
