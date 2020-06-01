import { IViewData, IViewLayout, ViewEngineProps, LayoutSchema } from '../interface';
import isEmpty from 'lodash/isEmpty';
import generatorSpecifyLayout from './layout_specify';
import generatorAutoLayout from './layout_auto';


function generatorLayout(viewMap: IViewData, viewLayout: IViewLayout, props: ViewEngineProps): Array<LayoutSchema> {
  let layout: Array<LayoutSchema> = []

  if (!isEmpty(viewLayout)) { // 指定了viewLayout
    layout = generatorSpecifyLayout(viewLayout, viewMap, props)
  } else { // 未指定，自动生成
    layout = generatorAutoLayout(props.viewData, viewMap, props)
  }
  console.log('layout: ', layout);
  return layout
}

export default generatorLayout