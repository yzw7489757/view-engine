import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Demo from '../src/index'
import Sider from './Sider';

ReactDOM.render(<Sider 
  // viewLayout={
  //   [
  //     [
  //       'field1{6}', 
  //       'field2', 
  //       'field3', 
  //       [
  //         'field4{10}', 'field5', 'field4'
  //       ]
  //     ],
  //     ['field2, field1, field4']
  //   ]
  // }
  viewData={{
    field1: {
      type: 'input',
      label: '123',
      span: 6,
      props: {
        value: '12345'
      }
    },
    field2: {
      label: '456',
      children: {
        field3: {
          type: 'text',
          label: 'label_field3',
          span:8,
          props: {
            value: 'value_field3'
          }
        },
        field4:{
          type: 'text',
          span:8,
          label: 'label_field4',
          props: {
            value: 'value_field4'
          }
        },
        field5:{
          type: 'text',
          span:8,
          label: 'label_field5',
          props: {
            value: 'value_field5'
          }
        }
      }
    },
    field6: {
      type: 'select',
      label: 'label_field6',
      props: {
        value: 1,
        options: [
          { value: 1, label: 'hahahhaha'},
          { value: 2, label: 'dzzzzz'},
        ]
      },
    },
    field7: {
      type: 'textarea',
      label: 'label_field7',
      props: {
        value: '123131231',
      },
    },
    field8: {
      type: 'tag',
      label: 'label_field8',
      props: {
        value: '123123123',
        style: {},
      },
    },
    field9: {
      type: 'inputNumber',
      label: 'label_field9',
      props: {
        value: 123,
      },
    },
    field10: {
      type: 'button',
      label: 'label_field10',
      props: {
        value: 'button',
      },
    },
}}></Sider>, document.getElementById('root'))