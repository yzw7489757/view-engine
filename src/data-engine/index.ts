import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import merge from 'lodash/merge'
import omit from 'lodash/omit'
import { IViewData, IViewDataItem, IViewDataItemProps } from '../interface';
import { isObject } from '../utils/index';

class DataEngine {

  data: IViewData;

  constructor({ viewData }: { viewData: IViewData }) {
    this.initialViewData(viewData)
  }

  initialViewData = (viewData: IViewData) => {
    let va = cloneDeep(viewData);
    va = this.initialMessageListener(va)
    console.log('va: ', va);
    this.data = va;
  }

  // 订阅模式实现
  listener = (type: string, callback: (engineData: IViewData , values?: IViewData) => void) => {
    
  }

  initialMessageListener = (viewData: IViewData ) => {
    const va = viewData;
    return forEach(va, (key, item, parentNode) => {
      const messageListener = []
      if (parentNode) {
        messageListener.push({
          receive: [`${parentNode.id}.hidden`, `${parentNode.id}.parentHidden`],
          setProps: {
            parentHidden: `\${${parentNode.id}}.parentHidden ? true : ${parentNode.id}.hidden`
          }
        })
      }
      return {
        ...item,
        id: key,
        messageListener
      }
    })
  }

  getParams = () => {
    const params = {}
    const va = this.data;
    forEach(va, (key, attr: IViewDataItem) => {
      params[key] = attr.props.value || ''
    })
    return params
  }

  updateProps = (diffs: Record<string, IViewDataItemProps>) => {
    Object.keys(diffs).forEach(field => {
      this.updateFieldProps(field, diffs[field])
    })

    return cloneDeep(this.data)
  }

  updateFieldProps = (field: string, props: IViewDataItemProps) => {
    forEach(this.data, (key, attr: IViewDataItem) => {
      if(key === field) {
        return merge(attr, { props })
      }
      return attr
    })
  }

  updateAttr = (attrs: Record<string, IViewDataItem>) => {
    Object.keys(attrs).forEach(field => {
      this.updateFieldAttr(field, attrs[field])
    })

    return cloneDeep(this.data)
  }

  updateFieldAttr = (field: string, attr: IViewDataItem) => {
    forEach(this.data, (key, attr: IViewDataItem) => {
      if(key === field) {
        return merge(attr, omit(attr, 'props'))
      }
      return attr
    })
  }
}

export default DataEngine


function forEach(data: IViewData, cb: (key: string, attr: any, parentNode?: IViewDataItem) => any, parentNode: IViewDataItem = null) {
  const backups: IViewData = {}
  Object.keys(data).forEach(key => {
    const item = data[key]
    const result = cb(key, item, parentNode) || item;
    backups[key] = result;

    if(item.children && isObject(item.children) && !isEmpty(item.children)) {
      const children = forEach(item.children, cb, item)
      Object.assign(backups[key], {
        children
      })
    }
  })
  return backups
}