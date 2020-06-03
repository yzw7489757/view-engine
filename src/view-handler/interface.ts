import { IViewData, ViewEngineProps, LayoutSchema, IViewLayout } from '../interface';

export interface LayoutFunc {
  generatorSpecifyLayout: SpecifyLayout;
  generatorAutoLayout: AutoLayout
}

export type IGeneratorLayout = (viewMap: IViewData, viewLayout: IViewLayout, props: ViewEngineProps) => Array<LayoutSchema>

export type AutoLayout = (viewData: IViewData,viewMap:IViewData, props: ViewEngineProps, layoutFunc: LayoutFunc) => Array<LayoutSchema>

export type SpecifyLayout = (viewLayout: IViewLayout, viewMap: IViewData, props: ViewEngineProps, layoutFunc: LayoutFunc) => Array<LayoutSchema>
