import React from 'react'
import { Input, Select, Button, Tag, InputNumber } from 'antd'
import input from './input'

const { TextArea } = Input;

export default {
  input,
  select: Select,
  button: Button,
  textarea: TextArea,
  tag: Tag,
  inputnumber: InputNumber,
  text: ({ value }) => (<span>{value}</span>)
}
