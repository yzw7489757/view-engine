import React from 'react'
import ReactDOM from 'react-dom'
import { Material } from 'dev-dashboard';
import { name } from '../package.json'
import UI from './UI';

ReactDOM.render(<Material title='View Engine' basePath={name} showFooter={true} routes={UI}/>, document.getElementById('root'))
