import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import merge from 'lodash/merge'
import omit from 'lodash/omit'
import { IViewData, IViewDataItem, IViewDataItemProps } from '../interface';
import { isObject } from '../utils/index';

class DataEngine {

  data: IViewData;

  constructor({ viewData }: { viewData: any}) {
    this.data = cloneDeep(viewData)
  }

  // 订阅模式实现
  listener = (type: string, callback: (engineData: IViewData , values?: IViewData) => void) => {
    
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

  updateField = (field: string, attr: IViewDataItem) => {
    forEach(this.data, (key, attr: IViewDataItem) => {
      if(key === field) {
        return merge(attr, omit(attr, 'props'))
      }
      return attr
    })
  }
}

export default DataEngine


function forEach(data: IViewData, cb: (key: string, attr: any) => any) {
  const backups: IViewData = {}
  Object.keys(data).forEach(key => {
    const item = data[key]
    const result = cb(key, item);
    backups[key] = result;

    if(item.children && isObject(item.children) && !isEmpty(item.children)) {
      const children = forEach(item.children, cb)
      Object.assign(backups[key], {
        children
      })
    }
  })
  return backups
}