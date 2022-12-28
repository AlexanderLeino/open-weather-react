const router = require('express').Router()
const weatherRoutes = require('./api/weather')

router.use('https://open-weather-react-app.herokuapp.com/api', weatherRoutes)

module.exports = router