import { IViewData } from '../../src/interface';

const DATA: IViewData = {
  member1: {
    type: 'input',
    label: '123',
    span: 6,
    props: {
      value: '12345'
    }
  },
  member2: {
    label: '456',
    children: {
      member3: {
        type: 'text',
        label: 'label_member3',
        span:8,
        props: {
          value: 'value_member3'
        }
      },
      member4:{
        type: 'text',
        span:8,
        label: 'label_member4',
        props: {
          value: 'value_member4'
        }
      },
      member5:{
        type: 'text',
        span:8,
        label: 'label_member5',
        props: {
          value: 'value_member5'
        }
      }
    }
  },
  member6: {
    type: 'select',
    label: 'label_member6',
    props: {
      value: 1,
      options: [
        { value: 1, label: 'hahahhaha'},
        { value: 2, label: 'dzzzzz'},
      ]
    },
  },
  member7: {
    type: 'textarea',
    label: 'label_member7',
    props: {
      value: '123131231',
    },
  },
  member8: {
    type: 'tag',
    label: 'label_member8',
    props: {
      value: '123123123',
      style: {},
    },
  },
  member9: {
    type: 'inputNumber',
    label: 'label_member9',
    props: {
      value: 123,
    },
  },
  member10: {
    type: 'button',
    label: 'label_member10',
    props: {
      value: 'button',
    },
  },
}

export default DATA