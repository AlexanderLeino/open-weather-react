require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(routes)


if (process.env.NODE_ENV === 'production') {
  {  app.use(express.static(path.join(__dirname, 'client/build'))); } //  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})