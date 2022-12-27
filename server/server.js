require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
const port = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})