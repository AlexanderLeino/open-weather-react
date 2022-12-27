const router = require('express').Router()
const weatherController = require('../../controllers/index')
//matches http:localhost:3001/api
router.route('/getGeoCoordinates')
    .post(weatherController.getGeoCoordinates)

router.route('/getWeatherData')
    .post(weatherController.getWeatherData)

router.route('/getHistoricalData')
    .post(weatherController.getHistoricalData)

module.exports = router