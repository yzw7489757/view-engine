import React from 'react'
import { IRenderEl } from './interface';
import injectToInstantiatedCom from '../component-factory/injectToInstantiatedCom';

const RenderEl:IRenderEl = (props) => {
  const { viewMap, data, componentsMap } = props
  const schemaMemberConf = viewMap[data.name as string]
  const type = schemaMemberConf.type || 'text';

  const _Com = componentsMap[type];

  return (
    <div className={`view-element view-element-${type} view-element-${data.name}`}>
      { data.title && <span className="view-label">{data.title}:</span> }
      <span className="view-content">
        { React.createElement(_Com, schemaMemberConf.props) }
      </span>
    </div>
  )
  
}

export default RenderEl;