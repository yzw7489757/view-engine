import React from 'react'
import { Row, Col } from 'antd'
import RenderCol from './renderCol';
import { IRenderRow } from './interface';
import _Omit from 'lodash/omit'
import isEmpty from 'lodash/isEmpty';


const RenderRow: IRenderRow = (props) => {
  const { data, rowIndex, ...resetProps } = props;

  let title: React.ReactNode = null
  let colContent: React.ReactNode = null
  
  const hasChild = Array.isArray(data.children) && !isEmpty(data.children);

  if (data.title) {
    title = <Col span={24} className={data.className}>
              <h3 className={`view-title view-title-${data.name}`}>{data.title}</h3>
            </Col>
  } else {
    colContent = RenderCol({ data: _Omit(data, 'children'), colIndex: 0, ...resetProps, RenderRow: RenderRow })
  }

  return (
    <Row key={rowIndex} align="middle" className={data.className}>
      {title}
      {colContent}
      {
        hasChild ? (data.children || []).map((col, colIndex) => {
          return RenderCol({ data: col, colIndex, ...resetProps, RenderRow: RenderRow })
        }) : null
      }
    </Row>
  )
}

export default RenderRow