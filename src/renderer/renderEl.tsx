import React from 'react'
import { IRenderEl } from './interface';
import injectToInstantiatedCom from '../component-factory/injectToInstantiatedCom';
import _Omit from 'lodash/omit';

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
    <div className={`view-element view-element-${type} view-element-${data.name}`}>
      { data.label && <span className="view-label">{data.label}:</span> }
      <span className="view-content">
        { injectToInstantiatedCom(_Com, {...schemaMemberConf.props, ..._Omit(schemaMemberConf, 'props')}) }
      </span>
    </div>
  )
  
}

export default RenderEl;