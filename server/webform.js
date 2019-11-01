import App from '../src/App'
import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const htmlPath =  './public/index.html'

export const webform = app => {
  app.get('/webform', (req, res) => {
    const reactHtml = ReactDOMServer.renderToString(
      <App
        props={{}}
        id=''
      />
    )
    fs.readFile(path.resolve(htmlPath), 'utf8', (err, data) => {
      if (err) {
        console.log(err)
        return res.status(500).send(`Error: ${err}`)
      }
      return (res
        .send(data
          .replace('<div id="root"></div>', `<div id="root">${reactHtml}</div>`)
        ))
    })
  })
}
