const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(express.static('./public'))

app.get('/*', function (req, res) {

  const index = path.resolve('./public/index.html')
  fs.readFile(index, 'utf8', function (err, data) {
    if (err) {
      console.log(err)
      return res.status(500).send('ERROR')
    }

    return res.send(data)
  })
})

const PORT = process.env.PORT || 5002
app.listen(PORT, function () {
  console.log('Dev Express server running at localhost:' + PORT)
})
