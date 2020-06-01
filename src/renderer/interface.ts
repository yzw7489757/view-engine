import { LayoutSchema, IViewData, ViewEngineProps } from '../interface';

interface RenderBaseProps {
  viewData: IViewData, 
  componentsMap: Record<string, React.ReactNode>, 
  ctx: ViewEngineProps,
  viewMap: IViewData,
}

export type IRenderRow = (props: {
  rowIndex: number,
  data: LayoutSchema,
} & RenderBaseProps) => React.ReactNode

export type IRenderCol = (props: {
  colIndex: number,
  data: LayoutSchema,
  RenderRow: IRenderRow
} & RenderBaseProps) => React.ReactNode

export type IRenderEl = (props: {
  data: LayoutSchema,
} & RenderBaseProps) => React.ReactNode

export type IRenderer = (props: {
  layout: Array<LayoutSchema>
} & RenderBaseProps) => React.ReactNode

