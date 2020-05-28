import { IViewData, IViewLayout, ViewEngineProps } from '../interface';

interface Layout {
	title?: string,
  span: number,
  chilren: Array<string>,
  className: string
}

function generatorLayout(viewMap: IViewData, viewLayout: IViewLayout, props: ViewEngineProps): Layout[] {
  
  return []
}

export default generatorLayout