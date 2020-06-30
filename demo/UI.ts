import { WindowsOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import simple from './simple';
import WithForm from './form/index';

export default [
  {
    name: '简单自动布局',
    path: '/autolayout',
    icon: WindowsOutlined,
    component: simple
  },
  {
    name: 'form实例',
    path: '/form',
    icon: 'StarFilled',
    component: WithForm
  }
]