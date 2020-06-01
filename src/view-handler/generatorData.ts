import isEmpty from 'lodash/isEmpty'
import { IViewData, ViewEngineProps } from '../interface';
import { isObject } from '../utils/index';

const generatorViewMap = (viewData: IViewData, props: ViewEngineProps):IViewData => {
  const viewMap = Object.create(null);
  const { disabled } = props;

  Object.keys(viewData).forEach(key => {
    const fieldData = viewData[key];
    if(!isObject(fieldData)) return 
    const { props: { fieldDisabled = false, ...fieldProps } = {} } = fieldData 

    viewMap[key] = {
      ...viewData[key],
      id: key,
      props: {
        ...fieldProps,
        disabled: disabled || fieldDisabled
      }
    }

    if(typeof fieldData.children === 'object' && !isEmpty(fieldData.children)) {
      Object.assign(viewMap, generatorViewMap(fieldData.children, props))
    }
  })

  return viewMap
}

export default generatorViewMap;