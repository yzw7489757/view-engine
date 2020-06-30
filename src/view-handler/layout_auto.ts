import { LayoutSchema } from '../interface';
import _isEmpty from 'lodash/isEmpty';
import { AutoLayout } from './interface';

// 无指定span，即平分

const generatorAutoLayout: AutoLayout = (viewData, viewMap, props, layoutFunc) => {
  const layout:Array<LayoutSchema> = []

  Object.keys(viewData).forEach(memberName => {
    const item = viewData[memberName];

    if (item.hidden) { // 隐藏字段提出布局流
      return;
    }

    if (item.children && !_isEmpty(item.children)) {
      // 有children 即放弃本身属性，当前级仅做title用途
      layout.push({
        title: (item.customLabel? item.customLabel(item): item.label) || '',
        name: item.id || null,
        label: '',
        span: item.span || 24,
        className: `ve-group-${item.id || item.type}`,
        children: generatorAutoLayout(item.children, viewMap, props, layoutFunc)
      })
      return
    }

    layout.push({
      title: null,
      label: item.label || '',
      name: <string>item.id,
      span: item.span || 24,
      className: `ve-field ve-field-${item.id || item.type}`,
      children: []
    })
  })

  return layout;
}
export default generatorAutoLayout