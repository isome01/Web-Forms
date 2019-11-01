import App from '../src/App'
import path from 'path'
import fs from 'fs'

const htmlPath =  './public/index.html'

export const render = app => {
  app.get('/render', (req, res) => {
    const React = require('react')
    const ReactDOMServer = require('react-dom/server')
    const reactHtml = ReactDOMServer.renderToString(<App />)

    fs.readFile(path.resolve(htmlPath), 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send(err)
      }
      return (res
        .send(data
          .replace('<div id="root"></div>', `<div id="root">${reactHtml}</div>`)
        ))
    })
  })
}
