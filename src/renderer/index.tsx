import React from 'react'
import RenderRow from './renderRow';
import { IRenderer } from './interface';
import './index.less';


const Renderer:IRenderer = (props) => {
  const { layout, viewData, ctx, viewMap, componentsMap } = props

  return layout.map((row, index) => RenderRow({
    rowIndex: index,
    data: row,
    viewData,
    viewMap,
    componentsMap,
    ctx,
  }))
}

export default Renderer