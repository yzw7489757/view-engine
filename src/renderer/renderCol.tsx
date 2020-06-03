import React from 'react';
import { Col } from 'antd'
import isEmpty from 'lodash/isEmpty';
import { IRenderCol } from './interface';
import RenderEl from './renderEl';


const RenderCol: IRenderCol = (props) => {
  const { data, colIndex, RenderRow, ...resetProps } = props;

  const hasChild = Array.isArray(data.children) && !isEmpty(data.children)

  if (hasChild) return (
    <Col key={colIndex} span={data.span} className={data.className}>
       { RenderRow({ ...resetProps, rowIndex: colIndex, data }) }
    </Col>
  )
  return data.name === null ? null : (
    <Col key={colIndex} span={data.span} className={`${data.className} col-${data.name}`}>
       { RenderEl({ data,  ...resetProps }) }
    </Col>
  )
}

export default RenderCol