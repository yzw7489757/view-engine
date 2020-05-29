import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Demo from '../src/index'

ReactDOM.render(<Demo 
  viewLayout={
    [
      [
        'field1{6}', 
        'field2', 
        'field3', 
        [
          'field4{10}', 'field5', 'field4'
        ]
      ],
      ['field2, field1, field4']
    ]
  }
  viewData={{
    field1: {
      type: 'input',
      label: '123',
      props: {
        value: '12345'
      }
    },
    field2: {
      type: 'select',
      label: '456',
      children: {
        field3: {
          type: 'text',
          label: 'label_field3',
          props: {
            value: 'value_field3'
          }
        },
        field4:{
          type: 'text',
          label: 'label_field4',
          props: {
            value: 'value_field4'
          }
        },
        field5:{
          type: 'text',
          label: 'label_field5',
          props: {
            value: 'value_field5'
          }
        }
      }
    }
}}></Demo>, document.getElementById('root'))