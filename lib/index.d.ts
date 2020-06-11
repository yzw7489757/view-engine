import React from 'react';
import { IEventHandler, IViewData, ViewEngineProps } from './interface';
declare class ViewEngine extends React.Component<ViewEngineProps, {
    componentsMap: Record<string, React.ReactNode>;
    resetKey: number;
}> {
    viewMap: IViewData;
    layout: any;
    static defaultProps: Partial<ViewEngineProps>;
    constructor(props: ViewEngineProps);
    generatorComponentMap: (newProps: ViewEngineProps) => Record<string, React.ReactNode>;
    handleClick: IEventHandler;
    handleSubmit: IEventHandler;
    handleChange: IEventHandler;
    reset: (key?: any) => void;
    render(): JSX.Element;
}
export default ViewEngine;
