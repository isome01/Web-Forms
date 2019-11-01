import {render} from './render'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {webform} from './webform'
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/public", express.static("./public"))

/* routes 'n such... */
webform(app)
render(app)

const PORT = process.env.PORT || 5002
app.listen(PORT, () => {
  console.log('Dev Express server running at localhost:' + PORT)
})
