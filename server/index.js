const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

// pull in the todo and user endpoints

var PORT = process.env.PORT || 5002
app.listen(PORT, function () {
  console.log('Dev Express server running at localhost:' + PORT)
})
