import React from 'react'
import { IRenderEl } from './interface';
import injectToInstantiatedCom from '../component-factory/injectToInstantiatedCom';
import _Omit from 'lodash/omit';
import FormItem from '../components/form-item';

// import FormItem from '../components/form-item';

const RenderEl:IRenderEl = (props) => {
  const { viewMap, data, componentsMap } = props

  if(!data.name) return null

  const schemaMemberConf = viewMap[data.name as string] || {}
  
  // console.group(data.name);
  //   console.log(schemaMemberConf)
  //   console.log(data)
  // console.groupEnd()
  const type = schemaMemberConf.type || 'text';
  const _Com = componentsMap[type];

  return (
    <div className={`ve-element ve-element-${type} ve-element-${data.name}`}>
      { data.label && (React.isValidElement(data.label) ? data.label : <label className="ve-label">{data.label}:</label>) }
      <span className="ve-content">
        <FormItem help={schemaMemberConf.props.value.toString()} status={'error'} showValidatorMsg={schemaMemberConf.props.value.toString().length > 15}>
          { injectToInstantiatedCom(_Com, {...schemaMemberConf.props, ..._Omit(schemaMemberConf, 'props')}) }
        </FormItem>
      </span>
    </div>
  )
  
}

export default RenderEl;