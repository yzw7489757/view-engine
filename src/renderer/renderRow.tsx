import React from 'react'
import { IViewData, ViewEngineProps, LayoutSchema } from '../interface';
import { Row, Col } from 'antd'
import RenderCol from './renderCol';
import { IRenderRow } from './interface';


const RenderRow: IRenderRow = (props) => {
  const { data, rowIndex, ...resetProps } = props;
  // const 

  return (
    <Row key={rowIndex} className={data.className}>
      {
        (data.children || []).map((col, colIndex) => {
          return RenderCol({ data: col, colIndex, ...resetProps, RenderRow: RenderRow })
        })
      }
    </Row>
  )
}

export default RenderRow