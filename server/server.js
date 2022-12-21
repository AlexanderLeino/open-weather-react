require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

let variable = process.env.APIKey
console.log(variable)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})