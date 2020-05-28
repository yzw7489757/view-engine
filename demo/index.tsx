import React from 'react';
import ReactDOM from 'react-dom';
import Demo from '../src/index'

ReactDOM.render(<Demo viewData={{
  name: {
    type: 'input',
    label: '123',
    props: {
      
    }
  }
}}></Demo>, document.getElementById('root'))