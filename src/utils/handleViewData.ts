import cloneDeep from 'lodash/cloneDeep'
import { IViewData, IViewDataItem } from '../interface';
import { forEach } from './index';

export default function handleViewData(viewData: IViewData):IViewData {
  const _viewData = cloneDeep(viewData);
  forEach(_viewData, (key: string, item: IViewDataItem) => {
    item.id = key;
    item.props = item.props || {}
  })
  return _viewData
}