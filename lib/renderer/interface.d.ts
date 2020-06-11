/// <reference types="react" />
import { LayoutSchema, IViewData, ViewEngineProps } from '../interface';
interface RenderBaseProps {
    viewData: IViewData;
    componentsMap: Record<string, React.ReactNode>;
    ctx: ViewEngineProps;
    viewMap: IViewData;
}
export declare type IRenderRow = (props: {
    rowIndex: number;
    data: LayoutSchema;
} & RenderBaseProps) => React.ReactNode;
export declare type IRenderCol = (props: {
    colIndex: number;
    data: LayoutSchema;
    RenderRow: IRenderRow;
} & RenderBaseProps) => React.ReactNode;
export declare type IRenderEl = (props: {
    data: LayoutSchema;
} & RenderBaseProps) => React.ReactNode;
export declare type IRenderer = (props: {
    layout: Array<LayoutSchema>;
} & RenderBaseProps) => React.ReactNode;
export {};
