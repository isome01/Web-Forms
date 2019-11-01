import React, {Component} from 'react'
import Webform from './Webform'
import {appStyles} from './app.styles.js'

/* App Wrapper: */

const App = ({props}) => {
  const [editor, setEditor] = React.useState({})
  return (
    <div style={appStyles['app']}>
      <Webform />
    </div>
  )
}

export default App
