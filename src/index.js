import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const render = typeof window !== 'undefined' && typeof document !== 'undefined'
  ? ReactDOM.hydrate(<App />, document.getElementById('root'))
  : () => {}

render()
