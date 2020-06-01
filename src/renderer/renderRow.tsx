import React from 'react'
import { Row } from 'antd'
import RenderCol from './renderCol';
import { IRenderRow } from './interface';
import _Omit from 'lodash/omit'


const RenderRow: IRenderRow = (props) => {
  const { data, rowIndex, ...resetProps } = props;

  return (
    <Row key={rowIndex} className={data.className}>
      { data.title && <h3 className={`view-title view-title-${data.name} view-title-${data.className}`}>{data.title}</h3> }
      { RenderCol({ data: _Omit(data, 'children'), colIndex: 0, ...resetProps, RenderRow: RenderRow })  }
      {
        (data.children || []).map((col, colIndex) => {
          return RenderCol({ data: col, colIndex, ...resetProps, RenderRow: RenderRow })
        })
      }
    </Row>
  )
}

export default RenderRow