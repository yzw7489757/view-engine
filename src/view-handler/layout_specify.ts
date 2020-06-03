import { LayoutSchema } from '../interface';
import isEmpty from 'lodash/isEmpty';
import { SpecifyLayout } from './interface';

const spanReg = /\{(\d+)\}/;

const generatorSpecifyLayout: SpecifyLayout = (viewLayout, viewMap, props, layoutFunc) => {
  const layout: Array<LayoutSchema> = []
  const { generatorAutoLayout } = layoutFunc;

  let count = 24;
  Object.keys(viewLayout).forEach((key) => {
    let currentItemLayout
    const row = viewLayout[key];

    if(!row) return; //不存在的表单协议

    if (typeof row === 'string') {
      spanReg.lastIndex = 0
      const res = row.match(spanReg)
      const span = res === null ? 24 : parseFloat(res[1]);
      const keyName = row.replace(/\{(\d+)?\}/, '');
      const item = viewMap[keyName] || {}

      if (item.hidden === true || isEmpty(item)) return // hidden 或 不存在该成员 。踢出布局流

      count > span ? (count -= span) : count = 24 - span;

      if (item.layout && Array.isArray(item.layout) && !isEmpty(item.layout)) {
        // currentItemLayout = generatorSpecifyLayout
      } else {
        currentItemLayout = generatorAutoLayout({ [keyName]: item }, viewMap, props, layoutFunc);

        if (currentItemLayout.length > 0) {
          currentItemLayout = {
            ...currentItemLayout[0],
            span
          }
        }
      }
    } else if (Array.isArray(row)) {
      currentItemLayout = {
        title: null,
        label: '',
        name: null,
        span: count || 24,
        className: 'view-row',
        children: generatorSpecifyLayout(row, viewMap, props, layoutFunc)
      }
    }

    currentItemLayout = Array.isArray(currentItemLayout) ? currentItemLayout : [currentItemLayout]

    layout.push(...currentItemLayout)
  })

  return layout;
}
export default generatorSpecifyLayout