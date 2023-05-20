// index.js
const express = require('express')
const fetch = require("node-fetch");
const cors = require('cors')
const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey com tomate 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app