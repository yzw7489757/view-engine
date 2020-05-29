import { IViewLayout, IViewData, ViewEngineProps, LayoutSchema } from '../interface';
import isEmpty from 'lodash/isEmpty';

const spanReg = /\{(\d+)\}/;

function generatorSpecifyLayout(viewLayout: IViewLayout, viewMap: IViewData, props: ViewEngineProps) {
  const layout: Array<LayoutSchema> = []
  let count = 24;
  Object.keys(viewLayout).forEach((key) => {
    const row = viewLayout[key];
    if (typeof row === 'string') {
      spanReg.lastIndex = 0
      const res = row.match(spanReg)
      const span = res === null ? 0 : parseFloat(res[1]);
      const keyName = row.replace(/\{(\d+)?\}/, '');
      const item = viewMap[keyName] || {}
      
      if (item.hidden === true || isEmpty(item)) return // hidden 或 不存在该成员 。踢出布局流
      
      count -= span;
      layout.push({
        title: item.label || '',
        span: span || 6,
        name: keyName,
        className: `view-col-${keyName}`,
      })
    } else if (Array.isArray(row)) {
      layout.push({
        title: '',
        span: count,
        className: 'view-row',
        children: generatorSpecifyLayout(row, viewMap, props)
      })
    }
  })

  return layout;
}
export default generatorSpecifyLayout