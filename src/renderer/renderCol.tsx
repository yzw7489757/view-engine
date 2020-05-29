import React from 'react';
import { Col } from 'antd'
import { LayoutSchema, IViewData, ViewEngineProps } from '../interface';
import { IRenderCol } from './interface';
import RenderEl from './renderEl';
import isEmpty from 'lodash/isEmpty';


const RenderCol: IRenderCol = (props) => {
  // console.log('props: ', props);
  const { data, colIndex, RenderRow, ...resetProps } = props;
  return (
    <Col key={colIndex} span={data.span} className={`${data.className} col-${data.name}`}>
      {
        Array.isArray(data.children) && !isEmpty(data.children) ? 
        RenderRow({
          ...resetProps,
          rowIndex: colIndex,
          data
        }) : RenderEl({
          data, 
          ...resetProps,
        })
      }
    </Col>
  )
}

export default RenderCol