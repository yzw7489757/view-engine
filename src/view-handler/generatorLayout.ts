import isEmpty from 'lodash/isEmpty';
import generatorSpecifyLayout from './layout_specify';
import generatorAutoLayout from './layout_auto';
import { LayoutSchema } from '../interface';
import { IGeneratorLayout } from './interface';

const layoutFunc = {
  generatorAutoLayout,
  generatorSpecifyLayout
}

const generatorLayout: IGeneratorLayout = (viewMap, viewLayout, props) => {
  let layout: Array<LayoutSchema> = []

  if (!isEmpty(viewLayout)) { // 指定了viewLayout
    layout = generatorSpecifyLayout(viewLayout, viewMap, props, layoutFunc)
  } else { // 未指定，自动生成
    layout = generatorAutoLayout(props.viewData, viewMap, props, layoutFunc)
  }
  return layout
}

export default generatorLayout