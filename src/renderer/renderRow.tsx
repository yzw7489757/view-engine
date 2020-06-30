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

  if (data.title || data.children) {
    title = data.title ? <Col span={24} className='ve-title'>
              <h4 className={`ve-title-${data.name}`}>{data.title}</h4>
            </Col> : null;
    colContent = data.children.map((col, colIndex) => RenderCol({ data: col, colIndex, ...resetProps, RenderRow }))
  } else {
    colContent = RenderCol({ data: _Omit(data, 'children'), colIndex: 0, ...resetProps, RenderRow })
  }

  return (
    <Row key={rowIndex} className={`ve-row ${hasChild ? data.className : ''}`}>
      {title}
      {colContent}
      {/* {
        hasChild ? data.children.map((col, colIndex) => RenderCol({ data: col, colIndex, ...resetProps, RenderRow })) : null
      } */}
    </Row>
  )
}

export default RenderRow