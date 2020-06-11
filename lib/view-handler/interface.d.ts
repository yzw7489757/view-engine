import { IViewData, ViewEngineProps, LayoutSchema, IViewLayout } from '../interface';
export interface LayoutFunc {
    generatorSpecifyLayout: SpecifyLayout;
    generatorAutoLayout: AutoLayout;
}
export declare type IGeneratorLayout = (viewMap: IViewData, viewLayout: IViewLayout, props: ViewEngineProps) => Array<LayoutSchema>;
export declare type AutoLayout = (viewData: IViewData, viewMap: IViewData, props: ViewEngineProps, layoutFunc: LayoutFunc) => Array<LayoutSchema>;
export declare type SpecifyLayout = (viewLayout: IViewLayout, viewMap: IViewData, props: ViewEngineProps, layoutFunc: LayoutFunc) => Array<LayoutSchema>;
